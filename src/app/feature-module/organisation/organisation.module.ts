import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganisationRoutingModule } from './organisation-routing.module';
import { OrganisationComponent } from './organisation.component';
import {BsDaterangepickerDirective, BsDaterangepickerInputDirective} from "ngx-bootstrap/datepicker";
import {ChartComponent} from "ng-apexcharts";
import {CollapseHeaderModule} from "../common/collapse-header/collapse-header.module";
import {PaginatorModule} from "primeng/paginator";
import {SharedModule} from "../../shared/shared-module";


@NgModule({
  declarations: [
    OrganisationComponent
  ],
    imports: [
        CommonModule,
        OrganisationRoutingModule,
        BsDaterangepickerDirective,
        BsDaterangepickerInputDirective,
        ChartComponent,
        CollapseHeaderModule,
        PaginatorModule,
        SharedModule
    ]
})
export class OrganisationModule { }
