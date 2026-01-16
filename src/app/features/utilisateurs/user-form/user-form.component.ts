import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Utilisateur } from '../../../core/model/utilisateur.model';
import { UserKeycloakService } from '../../../core/service/userkeycloak.service';
import { ToastService } from '../../../core/service/globals/toast.service';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from '../../common/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { breadCrumbItems } from '../../../shared/models/models';
import { CollapseHeaderComponent } from '../../common/collapse-header/collapse-header.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { btnFormState } from '../../../core/constants/form-btn-state.constant';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule, CommonModule, BreadcrumbsComponent, FooterComponent, CollapseHeaderComponent, RouterLink],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit {

  breadCrumbItems: breadCrumbItems[] = [];
  pageTitle = 'Formulaire Utilisateur';

  userForm!: FormGroup;
  user: Utilisateur | null = null;
  isEditMode = false;

  apiCallError: unknown | undefined;
  loadingBtn = false;
  textButton = btnFormState.save;

  roles: string[] = [];

  private _fb = inject(FormBuilder);
  private _userAPI = inject(UserKeycloakService);
  private toastService = inject(ToastService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  constructor() {
    this.breadCrumbItems = [
      { label: 'Utilisateurs' },
      { label: 'Liste utilisateurs' },
      { label: 'Formulaire utilisateur', active: true }
    ];

    this.userForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['Azerty@2025'],
      email: ['', Validators.compose([Validators.nullValidator, Validators.email])],
      phone: [''],
      role: ['', Validators.required],
      enable: [true]
    });
  }

  ngOnInit(): void {
    this.loadRoles();

    // check route for id param to load user
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadUser(id);
      }
    });
  }

  loadRoles() {
    this._userAPI.listRole().subscribe({
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

  loadUser(id: string): void {
    this._userAPI.getUserById(id).subscribe({
      next: (response: unknown) => {
        const respObj = response as Record<string, unknown>;
        const userData = Array.isArray(respObj?.['data']) ? respObj['data'][0] : response;
        this.user = userData as Utilisateur;
        this.isEditMode = true;
        this.mapObjectToForm(this.user);
      },
      error: (error) => {
        console.error('Error fetching user:', error);
        this.toastService.error('Erreur', 'Une erreur est survenue lors du chargement de l\'utilisateur.');
      }
    })
  }

  saveUser(): void {
    if (this.userForm?.valid) {
      this.changeFormElement();
      const userData = this.userForm.value;
      if (this.isEditMode && this.user) userData.id = this.user.id;

      const apiCall = this.isEditMode && this.user ? this._userAPI.updateUser(userData) : this._userAPI.createUser(userData);
      apiCall.subscribe({
        next: () => {
          this.toastService.success('Succès', `L'utilisateur a été ${this.isEditMode ? 'mis à jour' : 'créé'} avec succès.`).onHidden.subscribe(() => {
            this.initFormElement(true);
            this.router.navigate(['utilisateurs/liste-utilisateurs']);
          });
        },
        error: (error) => {
          console.error('Error saving user:', error);
          this.toastService.error('Erreur', `Une erreur est survenue lors de la ${this.isEditMode ? 'mise à jour' : 'création'} de l'utilisateur.`).onHidden.subscribe(() => {
            this.apiCallError = (error as Record<string, unknown>)?.['error'];
            this.initFormElement();
          });
        }
      })
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  mapObjectToForm(user?: Utilisateur | null) {
    this.userForm.patchValue({
      firstName: user?.firstName,
      lastName: user?.lastName,
      username: user?.username,
      email: user?.email,
      phone: user?.phone,
      role: user?.role,
      enable: user?.enable ?? true
    });
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
      this.clearForm()
    }
  }

  clearForm() {
    this.userForm.reset();
  }

  cancel() {
    this.clearForm()
  }

}
