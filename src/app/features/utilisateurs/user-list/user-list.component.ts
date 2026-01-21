import { Component, OnInit, inject, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalModule, BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Utilisateur } from '../../../core/model/utilisateur.model';
import { UserKeycloakService } from '../../../core/service/userkeycloak.service';
import { ToastService } from '../../../core/service/globals/toast.service';
import { BreadcrumbsComponent } from '../../common/breadcrumbs/breadcrumbs.component';
import { breadCrumbItems } from '../../../shared/models/models';
import { ApiPaginatedResponse } from '../../../core/model/api-response.model';
import { environment } from '../../../../environments/environment';
import { btnFormState } from '../../../core/constants/form-btn-state.constant';
import { formModalHeader } from '../../../core/constants/form-modal-header.constant';
import { Sort } from '@angular/material/sort';
import { CollapseHeaderComponent } from '../../common/collapse-header/collapse-header.component';
import { FooterComponent } from '../../common/footer/footer.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule, ModalModule, BreadcrumbsComponent, CollapseHeaderComponent, FooterComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  providers: [BsModalService]
})
export class UserListComponent implements OnInit {

  breadCrumbItems: breadCrumbItems[] = [];
  pageTitle = 'Utilisateur';

  utilisateurs: Utilisateur[] = []
  utilisateursCopy: Utilisateur[] = []

  apiResponse!: ApiPaginatedResponse<Utilisateur>

  initChecked = false;
  // pagination variables
  page = 0;
  size: number = environment.pageLimit;
  apiCallError: unknown | undefined;
  loadingBtn = false;
  textButton = btnFormState.save;
  txtModalHeader = formModalHeader.save + ' ' + this.pageTitle;

  isEditMode = false;
  isViewMode = false;

  public searchDataValue = '';

  utilisateur!: Utilisateur | null;
  newPassword!: FormControl
  roles: string[] = [];
  selectedRole = '';

  modalRef?: BsModalRef;
  config: Record<string, unknown> = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg modal-dialog-centered'
  };

  private _utilisateurAPI = inject(UserKeycloakService);
  private _fb = inject(FormBuilder);
  private modalService = inject(BsModalService);
  private toastService = inject(ToastService);
  private router = inject(Router);

  constructor() {

    this.breadCrumbItems = [
      { label: 'Utilisateurs' },
      { label: 'Liste utilisateurs', active: true }
    ];

    this.apiResponse = {
      total_pages: 0,
      message: '',
      total_items: 0,
      current_page: 0,
      status: false,
      page_size: 0,
      data: []
    }

    this.newPassword = this._fb.control('', Validators.compose([Validators.required, Validators.minLength(5)]))

  }

  ngOnInit(): void {
    this.loadUtilisateurs();
    this.loadRoles();
  }

  loadUtilisateurs() {
    this._utilisateurAPI.listUser().subscribe({
      next: (response: unknown) => {
        console.log('Users:', response);
        
        const respObj = response as Record<string, unknown>;
        const respData = Array.isArray(respObj?.['data']) ? respObj['data'] : response;
        if (Array.isArray(respData)) {
          this.utilisateurs = respData;
          this.utilisateursCopy = respData;

          // Initialize apiResponse if needed
          this.apiResponse = {
            total_pages: 1,
            message: 'Success',
            total_items: respData.length,
            current_page: 0,
            status: true,
            page_size: this.size,
            data: respData
          };
        }
      },
      error: (error) => {
        console.error("Error fetching utilisateurs:", error);
        this.toastService.error('Erreur', 'Une erreur est survenue lors du chargement des utilisateurs.');
      }
    })
  }

  loadRoles() {
    this._utilisateurAPI.listRole().subscribe({
      next: (response: unknown) => {
        const respObj = response as Record<string, unknown>;
        const data = Array.isArray(respObj?.['data']) ? respObj['data'] : response;
        if (Array.isArray(data)) {
          this.roles = (data as unknown[]).map((r: unknown) => {
            if (typeof r === 'string') return r;
            if (typeof r === 'object' && r !== null) {
              const o = r as Record<string, unknown>;
              return (o['name'] as string) ?? (o['role'] as string) ?? JSON.stringify(o);
            }
            return String(r);
          });
        }
      },
      error: (error) => {
        console.error('Error loading roles:', error);
      }
    })
  }

  public searchData(value: string): void {
    if (value === '') {
      this.utilisateurs = this.utilisateursCopy;
    } else {
      this.utilisateurs = this.utilisateursCopy.filter(user =>
        user.firstName?.toLowerCase().includes(value.toLowerCase()) ||
        user.lastName?.toLowerCase().includes(value.toLowerCase()) ||
        user.email?.toLowerCase().includes(value.toLowerCase()) ||
        user.username?.toLowerCase().includes(value.toLowerCase())
      );
    }
  }

  public sortData(sort: Sort) {
    const data = this.utilisateurs.slice();

    if (!sort.active || sort.direction === '') {
      this.utilisateurs = data;
    } else {
      this.utilisateurs = data.sort((a, b) => {
        const aValue = (a as never)[sort.active];

        const bValue = (b as never)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  changePage(newPage: number | string): void {
    if (newPage === 'prev') {
      this.page--;
      if (this.page < 0) this.page = 0
    } else if (newPage === 'next') {
      this.page++;
      if (this.page === this.apiResponse.total_pages) this.page = this.apiResponse.current_page
    }

    this.loadUtilisateurs();
  }

  delete(): void {
    if (this.utilisateur) {
      this.changeFormElement();
      
      this._utilisateurAPI.delete(this.utilisateur.id || '').subscribe({
        next: (response) => {
          console.log(response);
          
          this.toastService.success('Succès', `L'utilisateur a été supprimé avec succès.`).onHidden.subscribe(() => {
            this.initFormElement(true);
            this.modalRef?.hide();
            this.loadUtilisateurs();
          });
        },
        error: (error) => {
          console.error("There is an error !", error);
          this.toastService.error('Suppression Echouée', `Une erreur est survenue lors de la suppression de l'utilisateur.`);
        }
      });

    }
  }

  changeFormElement() {
    this.loadingBtn = true
    this.textButton = btnFormState.processing
  }

  initFormElement(isReinitData = false) {
    this.textButton = btnFormState.save
    this.loadingBtn = false;
    this.apiCallError = undefined

    if (isReinitData) {
      this.txtModalHeader = formModalHeader.save + ' ' + this.pageTitle;
    }
  }

  openModal(content: TemplateRef<unknown>, dataToUpdate: Utilisateur | null) {
    this.utilisateur = dataToUpdate
    this.config['class'] = "modal-md modal-dialog-centered"
    this.modalRef = this.modalService.show(content, this.config);
  }

  changeStatus(utilisateur: Utilisateur): void {
    Swal.fire({
      title: (utilisateur.enable ? 'Désactiver' : 'Activer') + ' l\'utilisateur \n' + utilisateur.firstName + ' ' + utilisateur.lastName + '?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Valider",
      cancelButtonText: "Annuler"
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedUser = { ...utilisateur, enable: !utilisateur.enable };
        this._utilisateurAPI.updateUser(updatedUser).subscribe({
          next: () => {
            this.toastService.success('Succès', `Le statut de l'utilisateur a été mis à jour avec succès.`).onHidden.subscribe(() => {
              this.loadUtilisateurs();
            });
          },
          error: (error) => {
            console.error("Error updating utilisateur status:", error);
            this.toastService.error('Erreur', `Une erreur est survenue lors de la mise à jour du statut de l'utilisateur.`);
          }
        });
      }
    })
  }

  reinitPassword() {
    this.changeFormElement();

    if (this.utilisateur?.id) {
      this._utilisateurAPI.reinitPassword(this.utilisateur.id, this.newPassword.value).subscribe({
        next: () => {
          this.modalService.hide();
          this.toastService.success("Mot de passe réinitialisé avec succès", "Réinitialisation effectuée").onHidden.subscribe(() => {
            this.initFormElement(true);
            this.modalRef?.hide();
            this.newPassword.reset()
          })
        },
        error: error => {
          console.error("There is an error !", error);
          this.toastService.error("Une erreur est survenue", "Réinitialisation échouée").onHidden.subscribe(() => {
            this.initFormElement();
            this.apiCallError = error.error;
          });
        }
      });
    }
  }

  formUser(isEdit = false, userId = ''): void {
    if (!isEdit) {
      this.router.navigate(['utilisateurs/form']);
    } else {
      this.router.navigate(['utilisateurs/form', userId]);
    }
  }
}
