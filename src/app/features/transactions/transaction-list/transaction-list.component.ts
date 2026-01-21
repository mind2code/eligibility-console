import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../../core/model/transaction.model';
import { TransactionEchec } from '../../../core/model/transaction-echec.model';
import { TransactionService } from '../../../core/service/transaction.service';
import { PartnerService } from '../../../core/service/partner.service';
import { ToastService } from '../../../core/service/globals/toast.service';
import { BreadcrumbsComponent } from '../../common/breadcrumbs/breadcrumbs.component';
import { breadCrumbItems } from '../../../shared/models/models';
import { ApiPaginatedResponse } from '../../../core/model/api-response.model';
import { environment } from '../../../../environments/environment';
import { CollapseHeaderComponent } from '../../common/collapse-header/collapse-header.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { Sort } from '@angular/material/sort';
import { Partner } from '../../../core/model/partner.model';

@Component({
    selector: 'app-transaction-list',
    imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule, BreadcrumbsComponent, CollapseHeaderComponent, FooterComponent],
    templateUrl: './transaction-list.component.html',
    styleUrl: './transaction-list.component.scss'
})
export class TransactionListComponent implements OnInit {

    breadCrumbItems: breadCrumbItems[] = [];
    pageTitle = 'Transactions';

    // Onglet actif (0 = réussies, 1 = échouées)
    activeTab = 0;

    // Transactions réussies
    successTransactions: Transaction[] = []
    successTransactionsCopy: Transaction[] = []
    successApiResponse!: ApiPaginatedResponse<Transaction>

    // Transactions échouées (modèle spécifique)
    failedTransactions: TransactionEchec[] = []
    failedTransactionsCopy: TransactionEchec[] = []
    failedApiResponse!: ApiPaginatedResponse<TransactionEchec>

    partners: Partner[] = [];

    // pagination variables
    page = 0;
    size: number = environment.pageLimit;

    public searchDataValue = '';

    // Search criteria
    searchForm!: FormGroup;
    hasSearched = false;
    searchType = '';
    loadingBtn = false;
    currentSearchType = '';
    currentSearchValue = '';

    private _transactionAPI = inject(TransactionService);
    private _partnerAPI = inject(PartnerService);
    private _fb = inject(FormBuilder);
    private toastService = inject(ToastService);

    constructor() {
        this.breadCrumbItems = [
            { label: 'Transactions' },
            { label: 'Liste transactions', active: true }
        ];

        this.successApiResponse = {
            total_pages: 0,
            message: '',
            total_items: 0,
            current_page: 0,
            status: false,
            page_size: 0,
            data: []
        }

        this.failedApiResponse = {
            total_pages: 0,
            message: '',
            total_items: 0,
            current_page: 0,
            status: false,
            page_size: 0,
            data: []
        }

        this.searchForm = this._fb.group({
            searchType: ['', Validators.required],
            searchValue: ['', Validators.required]
        });

    }

    ngOnInit(): void {
        this.loadPartners();
    }

    onSearchTypeChange(event: any) {
        this.searchType = event.target.value;
        this.searchForm.patchValue({ searchValue: '' });
    }

    loadPartners(): void {
        this._partnerAPI.getAll().subscribe({
            next: (response: any) => {
                this.partners = Array.isArray(response) ? response : response.data || [];
            },
            error: (error) => {
                console.error('Error loading partners:', error);
            }
        });
    }

    separateTransactions(response: ApiPaginatedResponse<any>): void {
        if (this.activeTab === 0) {
            // Succès
            this.successTransactions = response.data;
            this.successTransactionsCopy = [...this.successTransactions];
            this.successApiResponse = { ...response, data: this.successTransactions };
        } else {

            // Échouées -> mapper vers TransactionEchec
            this.failedTransactions = response.data;
            this.failedTransactionsCopy = [...this.failedTransactions];
            this.failedApiResponse = { ...response, data: this.failedTransactions };
        }
    }

    selectTab(tabIndex: number): void {
        this.activeTab = tabIndex;
        this.searchDataValue = '';
    }

    search(): void {
        if (this.searchForm.valid) {
            const searchType = this.searchForm.value.searchType;
            const searchValue = this.searchForm.value.searchValue;

            // Store current search criteria
            this.currentSearchType = searchType;
            this.currentSearchValue = searchValue;

            this.page = 0;
            this.loadingBtn = true;

            switch (searchType) {
                case 'transID':
                    this.searchByTransID(searchValue);
                    break;
                case 'meterNum':
                    this.searchByMeternum(searchValue);
                    break;
                case 'date':
                    this.searchByDate(searchValue);
                    break;
                case 'partner':
                    this.searchByPartner(searchValue);
                    break;
                default:
                    break;
            }
        }
    }

    searchByTransID(transID: string): void {
        let apiSend = this.activeTab === 0 ? this._transactionAPI.getByTransID(transID, { page: this.page, size: this.size }) : this._transactionAPI.getEchecByTransID(transID, { page: this.page, size: this.size });
        apiSend.subscribe({
            next: (response) => {
                this.separateTransactions(response);
                this.hasSearched = true;
                this.loadingBtn = false;
            },
            error: (error) => {
                console.error("Error fetching transaction:", error);
                this.toastService.error('Erreur', 'Une erreur est survenue lors de la recherche de la transaction.');
                this.hasSearched = false;
                this.successTransactions = [];
                this.failedTransactions = [];
                this.loadingBtn = false;
            }
        })
    }

    searchByMeternum(meterNum: string): void {
        let apiSend = this.activeTab === 0 ? this._transactionAPI.getAllByMeternum(meterNum, { page: this.page, size: this.size }) : this._transactionAPI.getAllEchecByMeternum(meterNum, { page: this.page, size: this.size });
        apiSend.subscribe({
            next: (response) => {
                this.separateTransactions(response);
                this.hasSearched = true;
                this.loadingBtn = false;
            },
            error: (error) => {
                console.error("Error fetching transactions by meternum:", error);
                this.toastService.error('Erreur', 'Une erreur est survenue lors de la recherche des transactions.');
                this.hasSearched = false;
                this.successTransactions = [];
                this.failedTransactions = [];
                this.loadingBtn = false;
            }
        })
    }

    searchByDate(date: string): void {
        let apiSend = this.activeTab === 0 ? this._transactionAPI.getAllByDate(date, { page: this.page, size: this.size }) : this._transactionAPI.getAllEchecByDate(date, { page: this.page, size: this.size });
        apiSend.subscribe({
            next: (response) => {
                this.separateTransactions(response);
                this.hasSearched = true;
                this.loadingBtn = false;
            },
            error: (error) => {
                console.error("Error fetching transactions by date:", error);
                this.toastService.error('Erreur', 'Une erreur est survenue lors de la recherche des transactions.');
                this.hasSearched = false;
                this.successTransactions = [];
                this.failedTransactions = [];
                this.loadingBtn = false;
            }
        })
    }

    searchByPartner(apmlogin: string): void {
        let apiSend = this.activeTab === 0 ? this._transactionAPI.getAllByPartner(apmlogin, { page: this.page, size: this.size }) : this._transactionAPI.getAllEchecByPartner(apmlogin, { page: this.page, size: this.size });
        apiSend.subscribe({
            next: (response) => {
                this.separateTransactions(response);
                this.hasSearched = true;
                this.loadingBtn = false;
            },
            error: (error) => {
                console.error("Error fetching transactions by partner:", error);
                this.toastService.error('Erreur', 'Une erreur est survenue lors de la recherche des transactions.');
                this.hasSearched = false;
                this.successTransactions = [];
                this.failedTransactions = [];
                this.loadingBtn = false;
            }
        })
    }

    public searchData(value: string): void {
        if (this.activeTab === 0) {
            // Tab des transactions réussies
            if (value === '') {
                this.successTransactions = this.successTransactionsCopy;
            } else {
                this.successTransactions = this.successTransactionsCopy.filter(trans =>
                    trans.transid?.toLowerCase().includes(value.toLowerCase()) ||
                    trans.partenaire?.toLowerCase().includes(value.toLowerCase()) ||
                    trans.system?.toLowerCase().includes(value.toLowerCase()) ||
                    trans.token?.toLowerCase().includes(value.toLowerCase())
                );
            }
        } else {
            // Tab des transactions échouées
            if (value === '') {
                this.failedTransactions = this.failedTransactionsCopy;
            } else {
                this.failedTransactions = this.failedTransactionsCopy.filter(trans =>
                    trans.transid?.toLowerCase().includes(value.toLowerCase()) ||
                    trans.partenaire?.toLowerCase().includes(value.toLowerCase()) ||
                    trans.system?.toLowerCase().includes(value.toLowerCase())
                );
            }
        }
    }

    public sortData(sort: Sort) {
        if (this.activeTab === 0) {
            const data = this.successTransactions.slice();
            if (!sort.active || sort.direction === '') {
                this.successTransactions = data;
            } else {
                this.successTransactions = data.sort((a, b) => {
                    const aValue = (a as never)[sort.active];
                    const bValue = (b as never)[sort.active];
                    return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
                });
            }
        } else {
            const data = this.failedTransactions.slice();
            if (!sort.active || sort.direction === '') {
                this.failedTransactions = data;
            } else {
                this.failedTransactions = data.sort((a, b) => {
                    const aValue = (a as never)[sort.active];
                    const bValue = (b as never)[sort.active];
                    return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
                });
            }
        }
    }

    changePage(newPage: number | string): void {
        if (newPage === 'prev') {
            this.page--;
            if (this.page < 0) this.page = 0
        } else if (newPage === 'next') {
            this.page++;
            const apiResponse = this.activeTab === 0 ? this.successApiResponse : this.failedApiResponse;
            if (this.page === apiResponse.total_pages) this.page = apiResponse.current_page
        } else if (typeof newPage === 'number') {
            this.size = newPage;
            this.page = 0;
        }

        // Re-search with current criteria and page
        this.loadingBtn = true;
        switch (this.currentSearchType) {
            case 'transID':
                this.searchByTransID(this.currentSearchValue);
                break;
            case 'meterNum':
                this.searchByMeternum(this.currentSearchValue);
                break;
            case 'date':
                this.searchByDate(this.currentSearchValue);
                break;
            case 'partner':
                this.searchByPartner(this.currentSearchValue);
                break;
            default:
                break;
        }
    }

    getStatusLabel(status: string | undefined): string {
        if (!status) return 'Inconnu';
        if (status === '0') return 'Succès';
        if (status === '1') return 'Échoué';
        return status;
    }

    getStatusClass(status: string | undefined): string {
        if (!status) return 'badge-secondary';
        if (status === '0') return 'badge-success';
        // if (status !== '0') return 'badge-danger';
        return 'badge-secondary';
    }
}
