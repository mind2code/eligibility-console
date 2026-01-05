import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Vendor } from '../../../core/model/vendor.model';
import { VendorService } from '../../../core/service/vendor.service';
import { ToastService } from '../../../core/service/globals/toast.service';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from '../../common/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { breadCrumbItems } from '../../../shared/models/models';
import { CollapseHeaderComponent } from '../../common/collapse-header/collapse-header.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { btnFormState } from '../../../core/constants/form-btn-state.constant';
import { PartnerService } from '../../../core/service/partner.service';
import { Partner } from '../../../core/model/partner.model';
import { NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent } from '@ng-select/ng-select';

@Component({
  selector: 'app-vendor-form',
  imports: [ReactiveFormsModule, CommonModule, BreadcrumbsComponent, FooterComponent, CollapseHeaderComponent, NgSelectComponent, RouterLink],
  templateUrl: './vendor-form.component.html',
  styleUrl: './vendor-form.component.scss'
})
export class VendorFormComponent implements OnInit {

  breadCrumbItems: breadCrumbItems[] = [];
  pageTitle = 'Formulaire Vendeur';

  vendorForm!: FormGroup;
  vendor: Vendor | null = null;
  isEditMode: boolean = false;

  apiCallError: any;
  loadingBtn: boolean = false;
  textButton = btnFormState.save;

  partners: Partner[] = []

  constructor(
    private _fb: FormBuilder,
    private _vendorAPI: VendorService,
    private _partnerAPI: PartnerService,
    private toastService: ToastService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.breadCrumbItems = [
      { label: 'Vendeurs' },
      { label: 'Liste vendeurs' },
      { label: 'Formulaire vendeurs', active: true }
    ];

    this.vendorForm = this._fb.group({
      code: [''],
      nom: ['', Validators.required],
      prenoms: ['', Validators.required],
      nomJeuneFille: [''],
      username: ['', Validators.required],
      password: ['Azerty@2025'],
      partnerId: ['', Validators.required],
      telephone: [''],
      telephoneSecondaire: [''],
      email: ['', Validators.compose([Validators.nullValidator, Validators.email])],
      enable: [true]
    });
  }

  ngOnInit(): void {

    this.loadPartner()

    // check route for id param to load vendor
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadVendor(id);
      }
    });
  }

  loadPartner() {
    this._partnerAPI.getAll().subscribe({
      next: response => {
        this.partners = response.data
      },
      error: error => {
        console.error(error)
      }
    })
  }

  loadVendor(id: string): void {
    this._vendorAPI.getById(id).subscribe({
      next: (response) => {
        this.vendor = response;
        this.isEditMode = true;
        this.mapObjectToForm(this.vendor);
      },
      error: (error) => {
        console.error('Error fetching vendor:', error);
        this.toastService.error('Erreur', 'Une erreur est survenue lors du chargement du vendeur.');
      }
    })
  }

  saveVendor(): void {
    if (this.vendorForm?.valid) {
      this.changeFormElement();
      const vendorData = this.vendorForm.value;
      if (this.isEditMode) vendorData.id = this.vendor?.id

      const apiCall = this.isEditMode && this.vendor ? this._vendorAPI.update(this.vendor.id, vendorData) : this._vendorAPI.save(vendorData);
      apiCall.subscribe({
        next: (response) => {
          this.toastService.success('Succès', `Le vendeur a été ${this.isEditMode ? 'mis à jour' : 'créé'} avec succès.`).onHidden.subscribe(() => {
            this.initFormElement(true);
            this.router.navigate(['vendeurs/liste-vendeurs']);
          });
        },
        error: (error) => {
          console.error('Error saving vendor:', error);
          this.toastService.error('Erreur', `Une erreur est survenue lors de la ${this.isEditMode ? 'mise à jour' : 'création'} du vendeur.`).onHidden.subscribe(() => {
            this.apiCallError = error.error;
            this.initFormElement();
          });
        }
      })
    } else {
      this.vendorForm.markAllAsTouched();
    }
  }

  mapObjectToForm(vendor?: Vendor | null) {
    this.vendorForm.patchValue({
      code: vendor?.code,
      nom: vendor?.nom,
      prenoms: vendor?.prenoms,
      nomJeuneFille: vendor?.nomJeuneFille,
      username: vendor?.username,
      telephone: vendor?.telephone,
      telephoneSecondaire: vendor?.telephoneSecondaire,
      email: vendor?.email,
      enable: vendor?.enable ?? true
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
    this.vendorForm.reset();
  }

  cancel() {
    this.clearForm()
  }

}
