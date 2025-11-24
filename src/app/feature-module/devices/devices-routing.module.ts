import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from './devices.component';
import {DeviceSearchComponent} from "./device-search/device-search.component";

const routes: Routes = [
  { path: '', component: DevicesComponent },
  { path: 'recherche', component: DeviceSearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
