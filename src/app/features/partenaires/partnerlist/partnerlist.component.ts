import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { breadCrumbItems } from '../../../shared/models/models';
import { Partner } from '../../../core/model/partner.model';
import { ApiPaginatedResponse } from '../../../core/model/api-response.model';
import { environment } from '../../../../environments/environment';
import { PartnerService } from '../../../core/service/partner.service';
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
import { PartnerParamService } from '../../../core/service/partner-param.service';
import { PartnerParamRequest } from '../../../core/model/dto/partner-param-request.model';
import { PartnerParam } from '../../../core/model/partner-param.model';
import { NgxMaskDirective } from "ngx-mask";
import { AccountService } from '../../../core/service/account.service';

@Component({
  selector: 'app-partnerlist',
  imports: [RouterModule, FormsModule, ReactiveFormsModule, MatSortModule, SharedModule, CommonModule, BreadcrumbsComponent, CollapseHeaderComponent, FooterComponent, ModalModule, NgxMaskDirective],
  templateUrl: './partnerlist.component.html',
  styleUrl: './partnerlist.component.scss',
  providers: [BsModalService]
})
export class PartnerlistComponent {
  breadCrumbItems: breadCrumbItems[] = [];
  pageTitle = 'Partenaires';

  partenaires: Partner[] = []
  partenairesCopy: Partner[] = []

  apiResponse!: ApiPaginatedResponse<Partner>

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

  partnerForm!: FormGroup
  partner!: Partner | null;

  // Form for parameters
  paramForm!: FormGroup
  parameters: PartnerParam[] = [];

  //Form pour rechargement credit
  formCredit!: FormGroup;

  modalRef?: BsModalRef;
  config: any = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg modal-dialog-centered'
  };

  constructor(
    private _partnerAPI: PartnerService,
    private _fb: FormBuilder,
    private modalService: BsModalService,
    private toastService: ToastService,
    private _partnerParamService: PartnerParamService,
    private _accountService: AccountService
  ) {
    this.breadCrumbItems = [
      { label: 'Partenaire' },
      { label: 'Liste Partenaire', active: true }
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

    this.partnerForm = this._fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      phone: [''],
      email: ['', Validators.compose([Validators.nullValidator, Validators.email])],
    });

    // parameters form with a FormArray initialized with two fields and a partner selector
    this.paramForm = this._fb.group({
      partnerId: [null, Validators.required],
      params: this._fb.array([this.initParam(), this.initParam()])
    });

    // Form for credit recharge
    this.formCredit = this._fb.group({
      partnerId: [null, Validators.required],
      montant: [500, [Validators.required, Validators.min(500)]],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.loadPartenaire();
  }

  loadPartenaire() {

    this._partnerAPI.getAllByPage({ page: this.page, size: this.size }).subscribe({
      next: (response) => {
        console.log(response);

        this.apiResponse = response;
        this.partenaires = response.data;
        this.partenairesCopy = response.data;

        // console.log(this.apiResponse);

      },
      error: (error) => {
        console.error("Error fetching partners:", error);
        this.toastService.error('Erreur', 'Une erreur est survenue lors du chargement des partenaires.');
      }
    })
  }

  public searchData(value: string): void {
    if (value == '') {
      this.partenaires = this.partenairesCopy;
    } else {
      // this.dataSource.filter = value.trim().toLowerCase();
      // this.partenaires = this.dataSource.filteredData;
    }
  }

  public sortData(sort: Sort) {
    const data = this.partenaires.slice();

    if (!sort.active || sort.direction === '') {
      this.partenaires = data;
    } else {
      this.partenaires = data.sort((a, b) => {
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

    this.loadPartenaire();
  }

  savePartner(): void {
    if (this.partnerForm?.valid) {
      this.changeFormElement();
      const partnerData = this.partnerForm.value;
      let apiSend: Observable<any> = this.isEditMode ? this._partnerAPI.update(this.partner?.id, partnerData) : this._partnerAPI.save(partnerData);
      apiSend.subscribe({
        next: (response) => {
          // console.log(response);
          this.toastService.success('Succès', `Le partenaire a été ${this.isEditMode ? 'mis à jour' : 'créé'} avec succès.`).onHidden.subscribe(() => {
            this.modalRef?.hide();
            this.initFormElement(true);
            this.loadPartenaire();
          });
        },
        error: (error) => {
          console.error("Error saving partner:", error);
          this.toastService.error('Erreur', `Une erreur est survenue lors de la ${this.isEditMode ? 'mise à jour' : 'création'} du partenaire.`).onHidden.subscribe(() => {
            this.apiCallError = error.error;
            this.initFormElement();
          });
        }
      });
    }
  }

  delete(): void {
    if (this.partner) {
      // this.changeFormElement();

      this.changeFormElement();
      this._partnerAPI.delete(this.partner.id).subscribe({
        next: (response) => {
          // console.log(response);
          this.toastService.success('Succès', `Le partenaire a été supprimé avec succès.`).onHidden.subscribe(() => {
            this.initFormElement(true);
            this.modalRef?.hide();
            this.loadPartenaire();
          });
        },
        error: (error) => {
          console.error("Error deleting partner:", error);
          this.toastService.error('Erreur', `Une erreur est survenue lors de la suppression du partenaire.`).onHidden.subscribe(() => {
            this.initFormElement();
            this.apiCallError = error.error;
          });
        }
      });
    }
  }

  changeStatus(partenaire: Partner): void {
    const updatedStatus = !partenaire.active;
    this._partnerAPI.updateStatus(partenaire.id, updatedStatus).subscribe({
      next: (response) => {
        // console.log(response);
        // this.loadPartenaire();
        this.toastService.success('Succès', `Le statut du partenaire a été mis à jour avec succès.`).onHidden.subscribe(() => {
          this.loadPartenaire();
        });
      },
      error: (error) => {
        console.error("Error updating partner status:", error);
        this.toastService.error('Erreur', `Une erreur est survenue lors de la mise à jour du statut du partenaire.`);
      }
    });
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
      this.clearForm()
      this.txtModalHeader = formModalHeader.save + ' ' + this.pageTitle;
    }
  }
  clearForm() {
    this.partnerForm.reset();
  }

  getPartnerParameters(event: any): void {
    console.log(event);

    let partnerId: string = event.target.value;
    partnerId = partnerId.split(":")[1].trim(); // Remove quotes if any
    if (!partnerId) {
      // No partner selected - nothing to load
      return;
    }
    this.parameters = [];
    this._partnerParamService.getAllByPartner(partnerId).subscribe({
      next: (response) => {
        console.log('Partner parameters:', response);
        this.parameters = response.data;

        //Chargement des champs avec les valeurs récupérées
        if (this.parameters.length != 0) this.clearParamForm(false, false);
        else this.clearParamForm(false, true); // if no parameters, initialize with two empty fields
        this.parameters.forEach(param => {
          this.params.push(this._fb.group({
            name: [param.paramKey, Validators.required],
            value: [param.paramValue]
          }));
        });
      },
      error: (error) => {
        console.error('Error fetching partner parameters:', error);
        this.toastService.error('Erreur', "Une erreur est survenue lors du chargement des paramètres du partenaire.");
      }
    });
  }

  /** Parameters form helpers **/
  initParam(): FormGroup {
    return this._fb.group({
      name: ['', Validators.required],
      value: ['']
    });
  }

  get params(): FormArray {
    return this.paramForm.get('params') as FormArray;
  }

  addParam(): void {
    this.params.push(this.initParam());
  }

  removeParam(index: number): void {
    if (this.params.length > 1) {
      this.params.removeAt(index);
    }
  }

  clearParamForm(resetPartner: boolean = false, addParam: boolean = true): void {
    while (this.params.length !== 0) {
      this.params.removeAt(0);
    }
    // reset partner selection
    if (resetPartner) {
      this.paramForm.patchValue({ partnerId: null });
    }
    // add two initial param fields
    if (addParam) {
      this.params.push(this.initParam());
      this.params.push(this.initParam());
    }
  }

  saveParams(): void {
    if (this.paramForm.valid) {

      this.changeFormElement();

      // For now we just log the value - you can replace this with an API call
      console.log('Parameters saved', this.paramForm.value);

      const partnerId = this.paramForm.value.partnerId;
      const params = this.paramForm.value.params;

      // Save each parameter using the PartnerParamService
      let paramRequest: PartnerParamRequest[] = [];
      params.forEach((param: any) => {
        const paramData = {
          paramKey: param.name,
          paramValue: param.value
        };
        paramRequest.push(paramData);
      });

      this._partnerParamService.save(paramRequest, partnerId).subscribe({
        next: (response) => {
          console.log('Parameter saved:', response);

          this.toastService.success('Succès', 'Paramètres enregistrés avec succès.').onHidden.subscribe(() => {
            this.modalRef?.hide();
            this.clearParamForm(true);
            this.initFormElement(true)
          });
        },
        error: (error) => {
          console.error('Error saving parameter:', error);
          this.toastService.error('Erreur', "Une erreur est survenue lors de l'enregistrement des paramètres.");
        }
      });

    } else {
      this.paramForm.markAllAsTouched();
    }
  }

  /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any, dataToUpdate: Partner | null, isModif: boolean = false, isView: boolean = false, isDelete: boolean = false) {

    this.clearForm()
    this.partner = dataToUpdate

    if (isModif || isView) {
      this.mapObjectToForm(dataToUpdate)
    }
    this.txtModalHeader = isModif ? formModalHeader.update + ' ' + this.pageTitle : isView ? formModalHeader.show + ' ' + this.pageTitle : isDelete ? formModalHeader.delete + ' ' + this.pageTitle : formModalHeader.save + ' ' + this.pageTitle;
    if (isDelete) {
      this.config.class = "modal-md modal-dialog-centered"
    }
    this.isEditMode = isModif
    this.isViewMode = isView

    this.modalRef = this.modalService.show(content, this.config);
  }

  mapObjectToForm(partner?: Partner | null) {

    this.partnerForm.patchValue({
      id: partner?.id,
      name: partner?.name,
      code: partner?.code,
      phone: partner?.phone,
      email: partner?.email,
    });
  }

  /** Open parameters modal **/
  openParamModal(template: any) {
    this.clearParamForm();
    this.modalRef = this.modalService.show(template, { backdrop: true, ignoreBackdropClick: true, class: 'modal-md modal-dialog-centered' });
  }

  creditAccount() {
    if (this.formCredit.valid) {

      this.changeFormElement();

      // For now we just log the value - you can replace this with an API call
      console.log('Parameters saved', this.formCredit.value);

      const amount = this.formCredit.value.montant;
      const description = this.formCredit.value.description;
      const partnerId = this.formCredit.value.partnerId;

      let accountNumber = this.partenaires.filter(partner => partner.id == partnerId)[0].accountNumber ?? ''

      this._accountService.recharger(accountNumber, { 'amount': amount, 'description': description }).subscribe({
        next: (response) => {
          console.log('Parameter saved:', response);

          this.toastService.success('Succès', 'Paramètres enregistrés avec succès.').onHidden.subscribe(() => {
            this.modalRef?.hide();
            this.initFormElement(true)
          });
        },
        error: (error) => {
          console.error('Error saving parameter:', error);
          this.toastService.error('Erreur', "Une erreur est survenue lors de l'enregistrement des paramètres.");
        }
      });

    } else {
      this.paramForm.markAllAsTouched();
    }
  }

  openCreditModal(template: any) {
    this.clearParamForm();
    this.modalRef = this.modalService.show(template, { backdrop: true, ignoreBackdropClick: true, class: 'modal-md modal-dialog-centered' });
  }
}