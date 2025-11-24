import { Component } from '@angular/core';
import {BreadCrumbItems} from "../../../shared/models/models";

@Component({
  selector: 'app-deposit',
  standalone: false,
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.scss'
})
export class DepositComponent {

  breadCrumbItems: BreadCrumbItems[] =[];

  constructor() {
    this.breadCrumbItems = [
      { label: 'Déposit' },
      { label: 'Recharger un partenaire', active: true }
    ];
  }
}
