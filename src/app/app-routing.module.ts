import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {canActivateAuthRole} from "./shared/guard/auth.guard";
import {ForbiddenComponent} from "./shared/components/forbidden/forbidden.component";
import {NotFoundComponent} from "./shared/components/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./feature-module/feature-module.module').then(
        (m) => m.FeatureModuleModule
      ),
    canActivate: [canActivateAuthRole],
    data: { role: 'admin' }
  },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
