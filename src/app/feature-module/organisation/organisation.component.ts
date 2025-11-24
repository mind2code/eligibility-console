import {Component, OnInit} from '@angular/core';
import { BreadCrumbItems } from '../../shared/models/models';

@Component({
  selector: 'app-organisation',
  standalone: false,
  templateUrl: './organisation.component.html',
  styleUrl: './organisation.component.scss'
})
export class OrganisationComponent implements OnInit {

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'Organisations' },
      { label: 'Liste des organisations', active: true }
    ];
  }

  breadCrumbItems:  BreadCrumbItems[] =[];

}
