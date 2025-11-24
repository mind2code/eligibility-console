import { Component } from '@angular/core';
import {BreadCrumbItems} from "../../../shared/models/models";

@Component({
  selector: 'app-pos-screen',
  standalone: false,
  templateUrl: './pos-screen.component.html',
  styleUrl: './pos-screen.component.scss'
})
export class PosScreenComponent {
  breadCrumbItems: BreadCrumbItems[] =[];

  constructor() {
    this.breadCrumbItems = [
      { label: 'Point de vente' },
      { label: 'Vendre', active: true }
    ];
  }
}
