import { Routes } from '@angular/router';
import { canActivateAuthRole } from './core/guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/index',
    pathMatch: 'full'
  },
  //Features Routes//
  {
    path: '', loadComponent: () => import('./features/features.component').then(m => m.FeaturesComponent),
    children: [
      {
        path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
        children: [
          { path: 'index', loadComponent: () => import('./features/dashboard/employee-dashboard/employee-dashboard.component').then(m => m.EmployeeDashboardComponent) },
        ],
        canActivate: [canActivateAuthRole],
        data: { role: 'admin' }
      },
      {
        path: 'partenaires', loadComponent: () => import('./features/partenaires/partenaires.component').then(m => m.PartenairesComponent),
        children: [
          { path: 'liste-partenaires', loadComponent: () => import('./features/partenaires/partnerlist/partnerlist.component').then(m => m.PartnerlistComponent) },
        ]
      },
      {
        path: 'vendeurs', loadComponent: () => import('./features/vendeurs/vendeurs.component').then(m => m.VendeursComponent),
        children: [
          { path: 'liste-vendeurs', loadComponent: () => import('./features/vendeurs/vendor-list/vendor-list.component').then(m => m.VendorListComponent) },
          { path: 'form', loadComponent: () => import('./features/vendeurs/vendor-form/vendor-form.component').then(m => m.VendorFormComponent) },
          { path: 'form/:id', loadComponent: () => import('./features/vendeurs/vendor-form/vendor-form.component').then(m => m.VendorFormComponent) },
        ]
      },
      {
        path: 'comptes', loadComponent: () => import('./features/comptes/comptes.component').then(m => m.ComptesComponent),
        children: [
          { path: 'liste-comptes', loadComponent: () => import('./features/comptes/comptelist/comptelist.component').then(m => m.CompletListComponent) },
        ]
      }

    ]

  },
  //Auth Routes//
  {
    path: '', loadComponent: () => import('./auth/auth.component').then(m => m.AuthComponent),
    children: [

      { path: 'error-404', loadComponent: () => import('./auth/error-404/error-404.component').then(m => m.Error404Component) },
      { path: 'error-500', loadComponent: () => import('./auth/error-500/error-500.component').then(m => m.Error500Component) },
      { path: 'forbidden', loadComponent: () => import('././features/common/components/forbidden/forbidden.component').then(m => m.ForbiddenComponent) },
    ]
  },
  {
    path: "**",
    redirectTo: '/error-404',
    pathMatch: 'full'
  }

] as const;
