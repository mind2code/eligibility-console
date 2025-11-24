import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModuleRoutingModule } from './feature-module-routing.module';
import { FeatureModuleComponent } from './feature-module.component';
import { SharedModule } from '../shared/shared-module';
import { FormsModule } from '@angular/forms';
import { DefaultSidebarComponent } from './common/default-sidebar/default-sidebar.component';
import { DefaultHeaderComponent } from './common/default-header/default-header.component';
import { HorizontalSidebarComponent } from './common/horizontal-sidebar/horizontal-sidebar.component';
import { TwoColSidebarComponent } from './common/two-col-sidebar/two-col-sidebar.component';
import { StackedSidebarComponent } from './common/stacked-sidebar/stacked-sidebar.component';
import { ThemeSettingsComponent } from './common/theme-settings/theme-settings.component';


@NgModule({
  declarations: [
    FeatureModuleComponent,
    DefaultSidebarComponent,
    DefaultHeaderComponent,
    HorizontalSidebarComponent,
    TwoColSidebarComponent,
    StackedSidebarComponent,
    ThemeSettingsComponent,
  ],
  imports: [
    CommonModule,
    FeatureModuleRoutingModule,
    SharedModule,
    FormsModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeatureModuleModule { }
