/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @angular-eslint/prefer-inject */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Device } from '../../../core/model/device.model';
import { ToastService } from '../../../core/service/globals/toast.service';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from '../../common/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { breadCrumbItems } from '../../../shared/models/models';
import { CollapseHeaderComponent } from '../../common/collapse-header/collapse-header.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { btnFormState } from '../../../core/constants/form-btn-state.constant';
import { CompteurService } from '../../../core/service/compteur.service';
import { DictionnaireService } from '../../../core/service/dictionnaire.service';
import { Dictionnaire } from '../../../core/model/dictionnaire.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-compteur-form',
  imports: [ReactiveFormsModule, CommonModule, BreadcrumbsComponent, FooterComponent, CollapseHeaderComponent, RouterLink],
  templateUrl: './compteur-form.component.html',
  styleUrl: './compteur-form.component.scss'
})
export class CompteurFormComponent implements OnInit {

  breadCrumbItems: breadCrumbItems[] = [];
  pageTitle = 'Formulaire Compteur';

  compteurForm!: FormGroup;
  compteur: Device | null = null;
  isEditMode = false;

  fabricants: Dictionnaire[] = [];
  modeles: Dictionnaire[] = [];

  apiCallError: unknown;
  loadingBtn = false;
  textButton = btnFormState.save;

  // Import mode: 'manual' for manual entry, 'import' to upload Excel file
  mode: 'manual' | 'import' = 'manual';
  fileToUpload: File | null = null;
  selectedFileName = '';
  uploadLoading = false;
  uploadResult: unknown = null;

  constructor(
    private _fb: FormBuilder,
    private _compteurAPI: CompteurService,
    private toastService: ToastService,
    private route: ActivatedRoute,
    private router: Router,
    private _dictionnaireApi: DictionnaireService
  ) {
    this.breadCrumbItems = [
      { label: 'Compteurs' },
      { label: 'Liste compteurs' },
      { label: 'Formulaire compteurs', active: true }
    ];

    this.compteurForm = this._fb.group({
      id: [0],
      serialNumber: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      meterSource: ['ELEC'],
      modele: [null],
      algorithme: ['07'],
      sgc: ['600233'],
      tariff: ['01'],
      krn: ['1'],
      ken: ['255'],
      tokenTech: ['02'],
      fabricant: [null, Validators.required],
      dateFabrication: [''],
      puissance: [''],
      stsVersion: ['STS 6'],
      dateBase: ['2014'],
      statut: [null]
    });
  }

  ngOnInit(): void {
    // check route for id param to load compteur
    this.loadFabricants()

  }

  loadCompteur(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this._compteurAPI.getById(id).subscribe({
          next: (response) => {
            this.compteur = response.data;
            this.isEditMode = true;
            this.mapObjectToForm(this.compteur);
          },
          error: (error) => {
            console.error('Error fetching compteur:', error);
            this.toastService.error('Erreur', 'Une erreur est survenue lors du chargement du compteur.');
          }
        })
      }
    });
  }

  loadFabricants(): void {
    this._dictionnaireApi.getByCategorie({ name: 'FABRICANT_COMPTEUR' }).subscribe({
      next: (response) => {
        console.log(response);

        this.fabricants = response.data.content;

        this.loadModeles()
      },
      error: (error) => {
        console.error('Error fetching dictionnaires:', error);
      }
    });
  }
  loadModeles(): void {
    this._dictionnaireApi.getByCategorie({ name: 'MODELE_COMPTEUR' }).subscribe({
      next: (response) => {
        // console.log(response);

        this.modeles = response.data;

        this.loadCompteur()
      },
      error: (error) => {
        console.error('Error fetching dictionnaires:', error);
      }
    });
  }

  saveCompteur(): void {
    if (this.compteurForm?.valid) {
      this.changeFormElement();
      const compteurData = this.compteurForm.value;
      if (this.isEditMode && this.compteur) compteurData.id = this.compteur?.id

      const dataToSend: Device = {
        serialNumber: compteurData.serialNumber,
        meterSource: compteurData.meterSource,
        modele: compteurData.modele ? { id: compteurData.modele } : null,
        fabricant: compteurData.fabricant ? { id: compteurData.fabricant } : null,
        dateFabrication: compteurData.dateFabrication,
        puissance: compteurData.puissance,
        sgc: compteurData.sgc,
        krn: compteurData.krn,
        tariff: compteurData.tariff,
        algorithme: compteurData.algorithme,
        stsVersion: compteurData.stsVersion,
        dateBase: compteurData.dateBase,
        statut: compteurData.statut ? { id: compteurData.statut } : null,
        externalReference: compteurData.externalReference,
        tokenTech: compteurData.tokenTech
      };

      const apiCall = this.isEditMode && this.compteur ? this._compteurAPI.update(this.compteur.id, dataToSend) : this._compteurAPI.save(dataToSend);
      apiCall.subscribe({
        next: () => {
          this.toastService.success('Succès', `Le compteur a été ${this.isEditMode ? 'mis à jour' : 'créé'} avec succès.`).onHidden.subscribe(() => {
            this.initFormElement(true);
            this.router.navigate(['compteurs/liste-compteurs']);
          });
        },
        error: (error: unknown) => {
          console.error('Error saving compteur:', error);
          this.toastService.error('Erreur', `Une erreur est survenue lors de la ${this.isEditMode ? 'mise à jour' : 'création'} du compteur.`).onHidden.subscribe(() => {
            // Try to narrow error shape safely
            this.apiCallError = (error && (error as any).error) ? (error as any).error : error;
            this.initFormElement();
          });
        }
      })
    } else {
      this.compteurForm.markAllAsTouched();
    }
  }

  mapObjectToForm(compteur?: Device | null) {
    this.compteurForm.patchValue({
      serialNumber: compteur?.serialNumber,
      externalReference: compteur?.externalReference,
      fabricant: compteur?.fabricant,
      modele: compteur?.modele,
      dateFabrication: compteur?.dateFabrication,
      puissance: compteur?.puissance,
      sgc: compteur?.sgc,
      krn: compteur?.krn,
      tariff: compteur?.tariff,
      algorithme: compteur?.algorithme,
      stsVersion: compteur?.stsVersion,
      dateBase: compteur?.dateBase,
      statut: compteur?.statut
    });
  }

  changeFormElement() {
    this.loadingBtn = true
    this.textButton = btnFormState.processing
  }

  initFormElement(isReinitData: boolean = false) {
    this.textButton = btnFormState.save
    this.loadingBtn = false;
    this.apiCallError = undefined

    if (isReinitData) {
      this.clearForm()
    }
  }

  clearForm() {
    this.compteurForm.reset();
  }

  cancel() {
    this.clearForm()
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      this.fileToUpload = null;
      this.selectedFileName = '';
      return;
    }
    const file = input.files[0];
    const ext = file.name.split('.').pop()?.toLowerCase();
    if (ext !== 'xls' && ext !== 'xlsx' && ext !== 'csv') {
      this.toastService.error('Fichier invalide', 'Veuillez sélectionner un fichier Excel (.xls, .xlsx ou .csv)');
      input.value = '';
      this.fileToUpload = null;
      this.selectedFileName = '';
      return;
    }
    this.fileToUpload = file;
    this.selectedFileName = file.name;
  }

  uploadExcel(): void {
    if (!this.fileToUpload) {
      this.toastService.error('Erreur', 'Aucun fichier sélectionné');
      return;
    }
    // Confirm with user before starting import
    // if (!confirm('Confirmer l\'import des compteurs depuis ce fichier ?')) {
    //   return;
    // }

    const formData = new FormData();
    formData.append('file', this.fileToUpload);

    Swal.fire({
      title: ' Confirmer l\'import ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Valider",
      cancelButtonText: "Annuler"
    }).then((result) => {
      if (result.isConfirmed) {
        this.uploadLoading = true;
        this._compteurAPI.upload(formData).subscribe({
          next: (response) => {
            this.uploadResult = response;
            this.toastService.success('Succès', 'Import terminé').onHidden.subscribe(() => {
              this.router.navigate(['compteurs/liste-compteurs']);
            });
          },
          error: (error) => {
            console.error('Upload error', error);
            const errObj = error as unknown;
            if (errObj && typeof errObj === 'object' && 'error' in (errObj as Record<string, unknown>)) {
              this.uploadResult = (errObj as Record<string, unknown>)['error'];
            } else {
              this.uploadResult = errObj;
            }
            this.toastService.error('Erreur', 'Une erreur est survenue lors de l\'import.');
          },
          complete: () => {
            this.uploadLoading = false;
            this.fileToUpload = null;
            this.selectedFileName = '';
          }
        });
      }
    })


  }



}