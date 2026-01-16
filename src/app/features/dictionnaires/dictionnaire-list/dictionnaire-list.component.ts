import { Component, OnInit, inject, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { breadCrumbItems } from '../../../shared/models/models';
import { Dictionnaire } from '../../../core/model/dictionnaire.model';
import { ApiPaginatedResponse } from '../../../core/model/api-response.model';
import { environment } from '../../../../environments/environment';
import { DictionnaireService } from '../../../core/service/dictionnaire.service';
import { Sort } from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';
import { SharedModule } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from "../../common/breadcrumbs/breadcrumbs.component";
import { CollapseHeaderComponent } from "../../common/collapse-header/collapse-header.component";
import { FooterComponent } from "../../common/footer/footer.component";
import { btnFormState } from '../../../core/constants/form-btn-state.constant';
import { formModalHeader } from '../../../core/constants/form-modal-header.constant';
import { Observable } from 'rxjs';
import { ModalModule, BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastService } from '../../../core/service/globals/toast.service';

@Component({
  selector: 'app-dictionnaire-list',
  imports: [RouterModule, FormsModule, ReactiveFormsModule, MatSortModule, SharedModule, CommonModule, BreadcrumbsComponent, CollapseHeaderComponent,
    FooterComponent, ModalModule],
  templateUrl: './dictionnaire-list.component.html',
  styleUrl: './dictionnaire-list.component.scss',
  providers: [BsModalService]
})
export class DictionnaireListComponent implements OnInit {
  breadCrumbItems: breadCrumbItems[] = [];
  pageTitle = 'Dictionnaires';

  dictionnaires: Dictionnaire[] = []
  dictionnaiiresCopy: Dictionnaire[] = []

  apiResponse!: ApiPaginatedResponse<Dictionnaire>

  initChecked = false;
  // pagination variables
  page = 0;
  size: number = environment.pageLimit;
  apiCallError: any;
  loadingBtn = false;
  textButton = btnFormState.save;
  txtModalHeader = formModalHeader.save + ' ' + this.pageTitle;

  isEditMode = false;
  isViewMode = false;

  public searchDataValue = '';

  // categories dropdown
  categories: string[] = [];
  selectedCategory = '';

  dictionnaireForm!: FormGroup
  dictionnaire!: Dictionnaire | null;

  modalRef?: BsModalRef;
  config: Record<string, unknown> = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg modal-dialog-centered'
  };

  private _dictionnaireAPI = inject(DictionnaireService);
  private _fb = inject(FormBuilder);
  private modalService = inject(BsModalService);
  private toastService = inject(ToastService);

  constructor() {
    this.breadCrumbItems = [
      { label: 'Dictionnaire' },
      { label: 'Liste Dictionnaire', active: true }
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

    this.dictionnaireForm = this._fb.group({
      name: ['', Validators.required],
    //   code: ['', Validators.required],
      categorie: ['', Validators.required],
      type: [''],
      description: [''],
    //   parentCode: [''],
    });
  }

  ngOnInit(): void {
    this.loadDictionnaire();
    this.loadCategories();
  }

  loadDictionnaire() {
    const pagination = { page: this.page, size: this.size };

    if (this.selectedCategory && this.selectedCategory !== '') {
      const payload = { ...pagination, name: this.selectedCategory };
      this._dictionnaireAPI.getByCategorie(payload).subscribe({
        next: (response) => {
          console.log('Dictionnaires by category', response);

          this.apiResponse = response;
          this.dictionnaires = response.data;
          this.dictionnaiiresCopy = response.data;
        },
        error: (error) => {
          console.error("Error fetching dictionnaires by category:", error);
          this.toastService.error('Erreur', 'Une erreur est survenue lors du chargement des dictionnaires.');
        }
      });
    } else {
      this._dictionnaireAPI.getAllByPage(pagination).subscribe({
        next: (response) => {
          console.log(response);

          this.apiResponse = response;
          this.dictionnaires = response.data;
          this.dictionnaiiresCopy = response.data;

        },
        error: (error) => {
          console.error("Error fetching dictionnaires:", error);
          this.toastService.error('Erreur', 'Une erreur est survenue lors du chargement des dictionnaires.');
        }
      })
    }
  }

  public searchData(value: string): void {
    if (value == '') {
      this.dictionnaires = this.dictionnaiiresCopy;
    } else {
      this.dictionnaires = this.dictionnaiiresCopy.filter(dict =>
        dict.name?.toLowerCase().includes(value.toLowerCase()) ||
        dict.code?.toLowerCase().includes(value.toLowerCase()) ||
        dict.categorie?.toLowerCase().includes(value.toLowerCase())
      );
    }
  }

  public sortData(sort: Sort) {
    const data = this.dictionnaires.slice();

    if (!sort.active || sort.direction === '') {
      this.dictionnaires = data;
    } else {
      this.dictionnaires = data.sort((a, b) => {
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

    this.loadDictionnaire();
  }

  saveDictionnaire(): void {
    if (this.dictionnaireForm?.valid) {
      this.changeFormElement();
      const dictionnaireData = this.dictionnaireForm.value;
      const apiSend: Observable<Dictionnaire> = this.isEditMode ? this._dictionnaireAPI.update(this.dictionnaire?.id, dictionnaireData) : this._dictionnaireAPI.save(dictionnaireData);
      apiSend.subscribe({
        next: (response) => {
          console.log(response);
          this.toastService.success('Succès', `Le dictionnaire a été ${this.isEditMode ? 'mis à jour' : 'créé'} avec succès.`).onHidden.subscribe(() => {
            this.modalRef?.hide();
            this.initFormElement(true);
            this.loadDictionnaire();
          });
        },
        error: (error) => {
          console.error("Error saving dictionnaire:", error);
          this.toastService.error('Erreur', `Une erreur est survenue lors de la ${this.isEditMode ? 'mise à jour' : 'création'} du dictionnaire.`).onHidden.subscribe(() => {
            this.apiCallError = error.error;
            this.initFormElement();
          });
        }
      });
    }
  }

  delete(): void {
    if (this.dictionnaire) {
      this.changeFormElement();
      this._dictionnaireAPI.delete(this.dictionnaire.id).subscribe({
        next: (response) => {
          console.log(response);
          this.toastService.success('Succès', `Le dictionnaire a été supprimé avec succès.`).onHidden.subscribe(() => {
            this.initFormElement(true);
            this.modalRef?.hide();
            this.loadDictionnaire();
          });
        },
        error: (error) => {
          console.error("Error deleting dictionnaire:", error);
          this.toastService.error('Erreur', `Une erreur est survenue lors de la suppression du dictionnaire.`).onHidden.subscribe(() => {
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
  initFormElement(isReinitData = false) {
    this.textButton = btnFormState.save
    this.loadingBtn = false;
    this.apiCallError = undefined

    if (isReinitData) {
      this.clearForm()
      this.txtModalHeader = formModalHeader.save + ' ' + this.pageTitle;
    }
  }

  // Load categories for the dropdown
  loadCategories(): void {
    this._dictionnaireAPI.getCategories().subscribe({
      next: (response: unknown) => {
        const respObj = response as Record<string, unknown>;
        const data = Array.isArray(respObj?.['data']) ? respObj['data'] : response;
        if (Array.isArray(data)) {
          // Normalize to simple string list when possible
          this.categories = (data as unknown[]).map((c: unknown) => {
            if (typeof c === 'string') return c;
            if (typeof c === 'object' && c !== null) {
              const o = c as Record<string, unknown>;
              return (o['CategoryName'] as string) ?? (o['name'] as string) ?? (o['categorie'] as string) ?? JSON.stringify(o);
            }
            return String(c);
          });
        }
      },
      error: (error) => {
        console.error('Error loading categories:', error);
      }
    })
  }

  onCategoryChange(value: string) {
    this.selectedCategory = value;
    this.page = 0;
    this.loadDictionnaire();
  }

  clearForm() {
    this.dictionnaireForm.reset();
  }

  /**
   * Open modal
   * @param content modal content
   */
  openModal(content: TemplateRef<unknown>, dataToUpdate: Dictionnaire | null, isModif = false, isView = false, isDelete = false) {

    this.clearForm()
    this.dictionnaire = dataToUpdate

    if (isModif || isView) {
      this.mapObjectToForm(dataToUpdate)
    }
    this.txtModalHeader = isModif ? formModalHeader.update + ' ' + this.pageTitle : isView ? formModalHeader.show + ' ' + this.pageTitle : isDelete ? formModalHeader.delete + ' ' + this.pageTitle : formModalHeader.save + ' ' + this.pageTitle;
    if (isDelete) {
      this.config['class'] = "modal-md modal-dialog-centered"
    }
    this.isEditMode = isModif
    this.isViewMode = isView

    this.modalRef = this.modalService.show(content, this.config);
  }

  mapObjectToForm(dictionnaire?: Dictionnaire | null) {

    this.dictionnaireForm.patchValue({
      id: dictionnaire?.id,
      name: dictionnaire?.name,
      code: dictionnaire?.code,
      categorie: dictionnaire?.categorie,
      type: dictionnaire?.type,
      description: dictionnaire?.description,
      parentCode: dictionnaire?.parentCode,
    });
  }
}
