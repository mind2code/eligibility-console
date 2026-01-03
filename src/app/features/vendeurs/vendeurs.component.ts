import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from '../common/breadcrumbs/breadcrumbs.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';

@Component({
  selector: 'app-vendeurs',
  imports: [RouterModule],
  templateUrl: './vendeurs.component.html',
  styleUrl: './vendeurs.component.scss'
})
export class VendeursComponent { }
