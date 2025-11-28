import { Component } from '@angular/core';
import { BreadCrumbItems } from '../../shared/models/models';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../common/footer/footer.component';
import { CollapseHeaderComponent } from '../common/collapse-header/collapse-header.component';
import { BreadcrumbsComponent } from '../common/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  breadCrumbItems: BreadCrumbItems[] = [];
  constructor() {
    this.breadCrumbItems = [
      { label: 'Home' },
      { label: 'Dashboard', active: true }
    ];
  }
}
