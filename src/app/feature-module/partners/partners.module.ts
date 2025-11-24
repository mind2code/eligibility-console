import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnersRoutingModule } from './partners-routing.module';
import { PartnersComponent } from './partners.component';
import {CustomPaginationModule} from "../../shared/custom-pagination/custom-pagination.module";
import { SharedModule } from '../../shared/shared-module';
import { PartnerDetailsComponent } from './partner-details/partner-details.component';
import {MatColumnDef, MatHeaderCell, MatTable} from "@angular/material/table";
import { DepositComponent } from './deposit/deposit.component';


@NgModule({
  declarations: [
    PartnersComponent,
    PartnerDetailsComponent,
    DepositComponent
  ],
  imports: [
    CommonModule,
    PartnersRoutingModule,
    CustomPaginationModule,
    SharedModule,
    MatTable,
    MatColumnDef,
    MatHeaderCell
  ]
})
export class PartnersModule { }
