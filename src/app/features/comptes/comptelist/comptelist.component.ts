import { Component, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BreadcrumbsComponent } from '../../common/breadcrumbs/breadcrumbs.component';
import { ModalModule, BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastService } from '../../../core/service/globals/toast.service';
import { Account } from '../../../core/model/account.model';
import { AccountService } from '../../../core/service/account.service';
import { PartnerService } from '../../../core/service/partner.service';
import { Partner } from '../../../core/model/partner.model';
import { environment } from '../../../../environments/environment';
import { ApiPaginatedResponse } from '../../../core/model/api-response.model';
import { btnFormState } from '../../../core/constants/form-btn-state.constant';
import { formModalHeader } from '../../../core/constants/form-modal-header.constant';
import { breadCrumbItems } from '../../../shared/models/models';
import { SharedModule } from 'primeng/api';
import { FooterComponent } from "../../common/footer/footer.component";
import { Sort } from '@angular/material/sort';
import { CollapseHeaderComponent } from "../../common/collapse-header/collapse-header.component";

@Component({
  selector: 'app-comptelist',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, BreadcrumbsComponent, ModalModule, SharedModule, FooterComponent, CollapseHeaderComponent],
  templateUrl: './comptelist.component.html',
  styleUrl: './comptelist.component.scss',
  providers: [BsModalService]
})
export class CompletListComponent {
  pageTitle = 'Comptes';
  breadCrumbItems: breadCrumbItems[] = [];
  apiResponse!: ApiPaginatedResponse<Account>;
  accounts: Account[] = [];
  accountsCopy: Account[] = [];

  apiCallError: any;
  loadingBtn: boolean = false;
  textButton = btnFormState.save;
  txtModalHeader = formModalHeader.save + ' ' + this.pageTitle;

  isEditMode: boolean = false;
  isViewMode: boolean = false;

  public searchDataValue = '';


  partners: Partner[] = [];

  page = 0;
  size = environment.pageLimit;

  accountForm!: FormGroup;
  account!: Account | null;

  modalRef?: BsModalRef;
  config: any = { backdrop: true, ignoreBackdropClick: true, class: 'modal-lg modal-dialog-centered' };

  constructor(
    private _fb: FormBuilder,
    private _accountAPI: AccountService,
    private _partnerAPI: PartnerService,
    private modalService: BsModalService,
    private toastService: ToastService
  ) {
    this.apiResponse = { total_pages: 0, message: '', total_items: 0, current_page: 0, status: false, page_size: 0, data: [] };

    this.accountForm = this._fb.group({
      accountNumber: ['', Validators.required],
      partner: ['', Validators.required],
      balance: [0, Validators.required],
      montantReserve: [0],
    });

    this.breadCrumbItems = [
      { label: 'Partenaire' },
      { label: 'Liste Partenaire', active: true }
    ];
  }

  ngOnInit(): void {
    this.loadAccounts();
    this.loadPartners();
  }

  loadAccounts(): void {
    this._accountAPI.getAllByPage({ page: this.page, size: this.size }).subscribe({
      next: (response) => {
        this.apiResponse = response;
        this.accounts = response.data;
        this.accountsCopy = response.data;
      },
      error: (error) => {
        console.error('Error loading accounts', error);
        this.toastService.error('Erreur', "Une erreur est survenue lors du chargement des comptes.");
      }
    });
  }

  loadPartners(): void {
    this._partnerAPI.getAll().subscribe({
      next: (response) => { this.partners = response.data ?? response; },
      error: (error) => { console.error('Error loading partners', error); }
    });
  }

  openModal(content: TemplateRef<any>, dataToUpdate: Account | null = null, isModif: boolean = false) {
    this.clearForm();
    this.account = dataToUpdate;
    if (isModif && dataToUpdate) this.mapObjectToForm(dataToUpdate);
    this.isEditMode = isModif;
    this.modalRef = this.modalService.show(content, this.config);
  }

  mapObjectToForm(account: Account) {
    this.accountForm.patchValue({
      accountNumber: account.accountNumber,
      partner: account.partner,
      balance: account.balance,
      montantReserve: account.montantReserve,
    });
  }

  save(): void {
    if (this.accountForm.valid) {
      const data = this.accountForm.value;
      const apiCall = this.isEditMode && this.account ? this._accountAPI.update(this.account.id, data) : this._accountAPI.save(data);
      apiCall.subscribe({
        next: () => {
          this.toastService.success('Succès', `Le compte a été ${this.isEditMode ? 'mis à jour' : 'créé'} avec succès.`).onHidden.subscribe(() => {
            this.modalRef?.hide();
            this.loadAccounts();
          });
        },
        error: (error) => {
          console.error('Error saving account', error);
          this.toastService.error('Erreur', `Une erreur est survenue lors de la ${this.isEditMode ? 'mise à jour' : 'création'} du compte.`);
        }
      });
    } else {
      this.accountForm.markAllAsTouched();
    }
  }

  delete(): void {
    this._accountAPI.delete(this.account!.id).subscribe({
      next: () => {
        this.toastService.success('Succès', 'Le compte a été supprimé.').onHidden.subscribe(() => this.loadAccounts());
      },
      error: (error) => { console.error('Error deleting account', error); this.toastService.error('Erreur', 'Une erreur est survenue lors de la suppression.'); }
    });
  }

  clearForm() {
    this.accountForm.reset({ balance: 0, montantReserve: 0 });
  }

  getPartnerName(id: string) {
    const p = this.partners.find(x => x.id === id);
    return p ? p.name : id;
  }

  // pagination helpers
  changePage(newPage: number | string): void {
    if (newPage === 'prev') {
      this.page--;
      if (this.page < 0) this.page = 0;
    } else if (newPage === 'next') {
      this.page++;
    }
    this.loadAccounts();
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

  public sortData(sort: Sort) {
    const data = this.accounts.slice();

    if (!sort.active || sort.direction === '') {
      this.accounts = data;
    } else {
      this.accounts = data.sort((a, b) => {
        const aValue = (a as never)[sort.active];

        const bValue = (b as never)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public searchData(value: string): void {
    if (value == '') {
      this.accounts = this.accountsCopy;
    } else {
      // this.dataSource.filter = value.trim().toLowerCase();
      // this.accounts = this.dataSource.filteredData;
    }
  }
}
