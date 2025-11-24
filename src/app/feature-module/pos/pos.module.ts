import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosRoutingModule } from './pos-routing.module';
import {PosScreenComponent} from "./pos-screen/pos-screen.component";
import {CollapseHeaderModule} from "../common/collapse-header/collapse-header.module";
import {SharedModule} from "../../shared/shared-module";


@NgModule({
  declarations: [
    PosScreenComponent
  ],
  imports: [
    CommonModule,
    PosRoutingModule,
    CollapseHeaderModule,
    SharedModule
  ]
})
export class PosModule { }
