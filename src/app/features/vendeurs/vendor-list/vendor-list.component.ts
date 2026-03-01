import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalModule, BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Vendor } from '../../../core/model/vendor.model';
import { VendorService } from '../../../core/service/vendor.service';
import { ToastService } from '../../../core/service/globals/toast.service';
import { VendorFormComponent } from '../vendor-form/vendor-form.component';
import { BreadcrumbsComponent } from '../../common/breadcrumbs/breadcrumbs.component';
import { breadCrumbItems } from '../../../shared/models/models';
import { ApiPaginatedResponse } from '../../../core/model/api-response.model';
import { environment } from '../../../../environments/environment';
import { btnFormState } from '../../../core/constants/form-btn-state.constant';
import { formModalHeader } from '../../../core/constants/form-modal-header.constant';
import { Sort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { CollapseHeaderComponent } from '../../common/collapse-header/collapse-header.component';
import { FooterComponent } from '../../common/footer/footer.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vendor-list',
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule, ModalModule, BreadcrumbsComponent, CollapseHeaderComponent, FooterComponent],
  templateUrl: './vendor-list.component.html',
  styleUrl: './vendor-list.component.scss',
  providers: [BsModalService]
})
export class VendorListComponent {

  breadCrumbItems: breadCrumbItems[] = [];
  pageTitle = 'Vendeur';

  vendeurs: Vendor[] = []
  vendeursCopy: Vendor[] = []

  apiResponse!: ApiPaginatedResponse<Vendor>

  initChecked = false;
  // pagination variables
  page: number = 0;
  size: number = environment.pageLimit;
  apiCallError: any;
  loadingBtn: boolean = false;
  textButton = btnFormState.save;
  txtModalHeader = formModalHeader.save + ' ' + this.pageTitle;

  isEditMode: boolean = false;
  isViewMode: boolean = false;

  public searchDataValue = '';

  vendeur!: Vendor | null;
  newPassword!: FormControl

  modalRef?: BsModalRef;
  config: any = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg modal-dialog-centered'
  };

  constructor(
    private _vendeurAPI: VendorService,
    private _fb: FormBuilder,
    private modalService: BsModalService,
    private toastService: ToastService,
    private router: Router
  ) {

    this.breadCrumbItems = [
      { label: 'Vendeurs' },
      { label: 'Liste vendeurs', active: true }
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

    this.newPassword = _fb.control('', Validators.compose([Validators.required, Validators.minLength(5)]))

  }

  ngOnInit(): void {
    this.loadVendeurs();
  }

  loadVendeurs() {

    this._vendeurAPI.getAllByPage({ page: this.page, size: this.size }).subscribe({
      next: (response) => {
        console.log(response);

        this.apiResponse = response;
        this.vendeurs = response.data;
        this.vendeursCopy = response.data;

        // console.log(this.apiResponse);

      },
      error: (error) => {
        console.error("Error fetching partners:", error);
        this.toastService.error('Erreur', 'Une erreur est survenue lors du chargement des vendeurss.');
      }
    })
  }

  public searchData(value: string): void {
    if (value == '') {
      this.vendeurs = this.vendeursCopy;
    } else {
      // this.dataSource.filter = value.trim().toLowerCase();
      // this.vendeurs = this.dataSource.filteredData;
    }
  }

  public sortData(sort: Sort) {
    const data = this.vendeurs.slice();

    if (!sort.active || sort.direction === '') {
      this.vendeurs = data;
    } else {
      this.vendeurs = data.sort((a, b) => {
        const aValue = (a as never)[sort.active];

        const bValue = (b as never)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  //Gestion de la pagination
  changePage(newPage: number | string): void {
    if (newPage === 'prev') {
      this.page--;
      if (this.page < 0) this.page = 0
    } else if (newPage === 'next') {
      this.page++;
      if (this.page == this.apiResponse.total_pages) this.page = this.apiResponse.current_page
    }

    this.loadVendeurs();
  }

  delete(): void {
    if (this.vendeur) {
      // this.changeFormElement();

      this.changeFormElement();
      this._vendeurAPI.delete(this.vendeur.id).subscribe({
        next: (response) => {
          // console.log(response);
          this.toastService.success('Succès', `Le vendeur a été supprimé avec succès.`).onHidden.subscribe(() => {
            this.initFormElement(true);
            this.modalRef?.hide();
            this.loadVendeurs();
          });
        },
        error: (error) => {
          console.error("Error deleting partner:", error);
          this.toastService.error('Erreur', `Une erreur est survenue lors de la suppression du vendeur.`).onHidden.subscribe(() => {
            this.initFormElement();
            this.apiCallError = error.error;
          });
        }
      });
    }
  }

  //Modification de l'apparence visuelle du bouton "Valider"
  changeFormElement() {
    this.loadingBtn = true
    this.textButton = btnFormState.processing
  }

  //Remise à l'état initial du bouton "Valider" et des données du formulaire
  initFormElement(isReinitData: boolean = false) {
    this.textButton = btnFormState.save
    this.loadingBtn = false;
    this.apiCallError = undefined

    if (isReinitData) {
      this.txtModalHeader = formModalHeader.save + ' ' + this.pageTitle;
    }
  }

  /**
     * Open modal
     * @param content modal content
     */
  openModal(content: any, dataToUpdate: Vendor | null) {

    this.vendeur = dataToUpdate

    this.config.class = "modal-md modal-dialog-centered"

    this.modalRef = this.modalService.show(content, this.config);
  }

  changeStatus(vendeur: Vendor): void {
    Swal.fire({
      title: (vendeur.enable ? 'Désactiver' : 'Activer') + ' le vendeur \n' + vendeur.nom + ' ' + vendeur.prenoms + '?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Valider",
      cancelButtonText: "Annuler"
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedStatus = !vendeur.enable;
        this._vendeurAPI.updateStatus(vendeur.id, updatedStatus).subscribe({
          next: (response) => {
            // console.log(response);
            // this.loadvendeur();
            this.toastService.success('Succès', `Le statut du vendeur a été mis à jour avec succès.`).onHidden.subscribe(() => {
              this.loadVendeurs();
            });
          },
          error: (error) => {
            console.error("Error updating partner status:", error);
            this.toastService.error('Erreur', `Une erreur est survenue lors de la mise à jour du statut du vendeur.`);
          }
        });
      }
    })
  }

  formVendor(isEdit: boolean = false, vendorId: string = '') {
    !isEdit ? this.router.navigate(['vendeurs/form']) : this.router.navigate(['vendeurs/form', vendorId])
  }

  reinitPassword() {
    //Changement de l'apparence du bouton
    this.changeFormElement();

    this._vendeurAPI.reinitPassword({userId: this.vendeur!.id, password: this.newPassword.value}).subscribe({
      next: response => {
        // console.log("Data receive: " + response);

        this.modalService.hide();
        this.toastService.success("Mot de passe rénitialisé avec succès", "Réinitialisation éffectuée").onHidden.subscribe(() => {
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
