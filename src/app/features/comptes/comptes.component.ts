import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrl: './comptes.component.scss',
  imports: [RouterModule],
})
export class ComptesComponent {
  pageTitle = 'Comptes';
}
