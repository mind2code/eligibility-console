import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureModuleComponent } from './feature-module.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureModuleComponent,
    children: [

      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      { path: 'organisation', loadChildren: () => import('./organisation/organisation.module').then(m => m.OrganisationModule) },
      { path: 'partners', loadChildren: () => import('./partners/partners.module').then(m => m.PartnersModule) },
      { path: 'devices', loadChildren: () => import('./devices/devices.module').then(m => m.DevicesModule) },
      { path: 'pos', loadChildren: () => import('./pos/pos.module').then(m => m.PosModule) },
      ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureModuleRoutingModule {}
