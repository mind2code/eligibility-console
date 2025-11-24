import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared-module';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LeadsDashboardComponent } from './leads-dashboard/leads-dashboard.component';
import { ChipsModule } from 'primeng/chips';

@NgModule({
  declarations: [
    DashboardComponent,
    LeadsDashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    TimepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    SharedModule,
    ChipsModule
  ]
})
export class DashboardModule { }
