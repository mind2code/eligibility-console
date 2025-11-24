import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './devices.component';
import {BsDatepickerDirective, BsDatepickerInputDirective} from "ngx-bootstrap/datepicker";
import {CollapseHeaderModule} from "../common/collapse-header/collapse-header.module";
import {CustomPaginationModule} from "../../shared/custom-pagination/custom-pagination.module";
import {DateRangePickerModule} from "../common/date-range-picker/date-range-picker.module";
import {FormsModule} from "@angular/forms";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {PaginatorModule} from "primeng/paginator";
import {SharedModule} from "../../shared/shared-module";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import { DeviceSearchComponent } from './device-search/device-search.component';


@NgModule({
  declarations: [
    DevicesComponent,
    DeviceSearchComponent
  ],
    imports: [
        CommonModule,
        DevicesRoutingModule,
        BsDatepickerDirective,
        BsDatepickerInputDirective,
        CollapseHeaderModule,
        CustomPaginationModule,
        DateRangePickerModule,
        FormsModule,
        MatOption,
        MatSelect,
        MatSort,
        MatSortHeader,
        PaginatorModule,
        SharedModule
    ]
})
export class DevicesModule { }
