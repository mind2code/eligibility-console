import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalModule, BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Device } from '../../../core/model/device.model';
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
import { CompteurService } from '../../../core/service/compteur.service';
import { DictionnaireService } from '../../../core/service/dictionnaire.service';
import { Dictionnaire } from '../../../core/model/dictionnaire.model';

@Component({
    selector: 'app-compteur-list',
    imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule, ModalModule, BreadcrumbsComponent, CollapseHeaderComponent, FooterComponent],
    templateUrl: './compteur-list.component.html',
    styleUrl: './compteur-list.component.scss',
    providers: [BsModalService]
})
export class CompteurListComponent {

    breadCrumbItems: breadCrumbItems[] = [];
    pageTitle = 'Compteur';

    compteurs: Device[] = []
    compteursCopy: Device[] = []

    fabricants: Dictionnaire[] = []

    apiResponse!: ApiPaginatedResponse<Device>

    // pagination variables
    page = 0;
    size = environment.pageLimit;
    apiCallError: any;
    loadingBtn = false;
    textButton = btnFormState.save;
    txtModalHeader = formModalHeader.save + ' ' + this.pageTitle;

    isEditMode = false;
    isViewMode = false;

    public searchDataValue = '';

    compteur!: Device | null

    modalRef?: BsModalRef;
    config: any = {
        backdrop: true,
        ignoreBackdropClick: true,
        class: 'modal-lg modal-dialog-centered'
    };

    constructor(
        private _compteurAPI: CompteurService,
        private _dictionnaireAPI: DictionnaireService,
        private _fb: FormBuilder,
        private modalService: BsModalService,
        private toastService: ToastService,
        private router: Router
    ) {

        this.breadCrumbItems = [
            { label: 'Compteurs' },
            { label: 'Liste compteurs', active: true }
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

    }

    ngOnInit(): void {
        this.loadFabricants()
        // this.loadCompteurs();
    }

    loadCompteurs() {
        this._compteurAPI.getAllByPage({ page: this.page, size: this.size }).subscribe({
            next: (response: ApiPaginatedResponse<Device>) => {
                this.apiResponse = response;
                this.compteurs = response.data;
                this.compteursCopy = response.data;

                // this.compteurs.forEach(compteur=>{
                //     compteur.fabricant
                // })
            },
            error: (error: unknown) => {
                console.error("Error fetching compteurs:", error);
                this.toastService.error('Erreur', 'Une erreur est survenue lors du chargement des compteurs.');
            }
        })
    }

    loadFabricants() {
        this._dictionnaireAPI.getByCategorie({ name: 'FABRICANT' }).subscribe({
            next: (response) => {
                console.log(response);
                
                this.fabricants = response

                this.loadCompteurs()
            },
            error: (error) => {
                console.error("Error fetching Fabricants:", error);
                this.toastService.error('Erreur', 'Une erreur est survenue lors du chargement des fabriquant.');

            }
        })
    }

    private currentSearchQuery = '';

    public searchData(value: string): void {
        const q = (value ?? '').trim();
        this.currentSearchQuery = q;
        // reset to first page for a new search
        this.page = 0;

        if (!q) {
            // if empty, reload all compteurs from server
            this.loadCompteurs();
            return;
        }

        // call API search endpoint (paginated)
        this._compteurAPI.search(q, { page: this.page, size: this.size }).subscribe({
            next: (response: ApiPaginatedResponse<Device>) => {
                this.apiResponse = response;
                this.compteurs = response.data || [];
                this.compteursCopy = this.compteurs;
            },
            error: (error: unknown) => {
                console.error('Error searching compteurs:', error);
                this.toastService.error('Erreur', 'Une erreur est survenue lors de la recherche.');
            }
        });
    }

    // called on every input change; only reloads full list when the field is cleared
    public onSearchInputChange(value: string): void {
        if ((value ?? '').trim() === '') {
            this.currentSearchQuery = '';
            this.loadCompteurs();
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
        } else if (typeof newPage === 'number') {
            this.page = newPage;
        }

        // If we are in search mode, call search API with pagination, otherwise load all
        if (this.currentSearchQuery && this.currentSearchQuery.trim() !== '') {
            this._compteurAPI.search(this.currentSearchQuery, { page: this.page, size: this.size }).subscribe({
                next: (response: ApiPaginatedResponse<Device>) => {
                    this.apiResponse = response;
                    this.compteurs = response.data || [];
                },
                error: (error: unknown) => {
                    console.error('Error fetching search page:', error);
                    this.toastService.error('Erreur', 'Une erreur est survenue lors du chargement.');
                }
            });
        } else {
            this.loadCompteurs();
        }
    }

    public sortData(sort: Sort) {
        const data = this.compteurs.slice();

        if (!sort.active || sort.direction === '') {
            this.compteurs = data;
        } else {
            this.compteurs = data.sort((a, b) => {
                const aValue = (a as never)[sort.active];
                const bValue = (b as never)[sort.active];
                return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
            });
        }
    }



    delete(): void {
        if (this.compteur) {
            // this.changeFormElement();

            this.changeFormElement();
            this._compteurAPI.delete(this.compteur.id).subscribe({
                next: (response) => {
                    // console.log(response);
                    this.toastService.success('Succès', `Le vendeur a été supprimé avec succès.`).onHidden.subscribe(() => {
                        this.initFormElement(true);
                        this.modalRef?.hide();
                        this.loadCompteurs();
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
    openModal(content: any, dataToUpdate: Device | null, isModif: boolean = false, isView: boolean = false, isDelete: boolean = false) {

        this.compteur = dataToUpdate

        this.config.class = "modal-md modal-dialog-centered"

        this.modalRef = this.modalService.show(content, this.config);
    }

    formCompteur(isEdit: boolean = false, id: number = 0) {
        !isEdit ? this.router.navigate(['compteurs/form']) : this.router.navigate(['compteurs/form', id])
    }

}