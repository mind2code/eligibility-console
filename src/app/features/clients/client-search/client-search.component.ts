import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ClientVendingService } from '../../../core/service/client-vending.service';
import { ToastService } from '../../../core/service/globals/toast.service';
import { BreadcrumbsComponent } from '../../common/breadcrumbs/breadcrumbs.component';
import { CollapseHeaderComponent } from '../../common/collapse-header/collapse-header.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { breadCrumbItems } from '../../../shared/models/models';
import { ClientInfo } from '../../../core/model/client-info.model';
import { SoldeDette } from '../../../core/model/solde-dette.model';
import { Transaction } from '../../../core/model/transaction.model';
import { TransactionEchec } from '../../../core/model/transaction-echec.model';
import { TransactionDette } from '../../../core/model/transaction-dette.model';
import { TransactionDetteEchec } from '../../../core/model/transaction-dette-echec.model';
import { ApiOneResponse } from '../../../core/model/api-response.model';
import { TransactionService } from '../../../core/service/transaction.service';
import { TransactionDetteService } from '../../../core/service/transaction-dette.service';

@Component({
  selector: 'app-client-search',
  imports: [RouterModule, FormsModule, CommonModule, BreadcrumbsComponent, CollapseHeaderComponent, FooterComponent],
  templateUrl: './client-search.component.html',
  styleUrl: './client-search.component.scss',
})
export class ClientSearchComponent {
  breadCrumbItems: breadCrumbItems[] = [];

  // Champ de saisie
  meterNum = '';
  clientInfo: ClientInfo | null = null;
  soldeDette: SoldeDette | null = null;
  energySuccessTransactions: Transaction[] = [];
  energyFailedTransactions: TransactionEchec[] = [];
  debtSuccessTransactions: TransactionDette[] = [];
  debtFailedTransactions: TransactionDetteEchec[] = [];

  hasSearched = false;
  loadingBtn = false;

  // Libellés en français des champs les plus courants renvoyés par l'API.
  // Les champs additionnels non listés ici sont quand même affichés,
  // avec leur clé technique comme libellé.
  private readonly fieldLabels: { [key: string]: string } = {
    meterNum: 'Numéro compteur',
    numeroContrat: 'Numéro contrat',
    nom: 'Nom',
    prenom: 'Prénom',
    tarif: 'Tarif',
    adresse: 'Adresse',
    telephone: 'Téléphone',
    email: 'Email',
    partenaire: 'Partenaire',
    statut: 'Statut',
    customerName: 'Nom client',
    source: 'Origine client',
  };

  private _clientVendingAPI = inject(ClientVendingService);
  private _transactionAPI = inject(TransactionService);
  private _transactionDetteAPI = inject(TransactionDetteService);
  private toastService = inject(ToastService);

  constructor() {
    this.breadCrumbItems = [
      { label: 'Consultations' },
      { label: 'Recherche client', active: true },
    ];
  }

  search(): void {
    const meterNum = this.meterNum?.trim();
    if (!meterNum) {
      return;
    }

    this.loadingBtn = true;
    this.hasSearched = false;
    this.clientInfo = null;
    this.soldeDette = null;
    this.energySuccessTransactions = [];
    this.energyFailedTransactions = [];
    this.debtSuccessTransactions = [];
    this.debtFailedTransactions = [];

    forkJoin({
      client: this._clientVendingAPI.searchClient(meterNum).pipe(
        catchError((error) => {
          console.error('Erreur lors de la recherche du client:', error);
          return of(null);
        })
      ),
      dette: this._clientVendingAPI.getSoldeDette(meterNum).pipe(
        catchError((error) => {
          console.error('Erreur lors de la récupération du solde de dette:', error);
          return of(null);
        })
      ),
      energySuccess: this._transactionAPI.getAllByMeternum(meterNum, { page: 0, size: 5 }).pipe(
        catchError((error) => {
          console.error('Erreur lors de la récupération des achats énergie réussis:', error);
          return of(null);
        })
      ),
      energyFailed: this._transactionAPI.getAllEchecByMeternum(meterNum, { page: 0, size: 5 }).pipe(
        catchError((error) => {
          console.error('Erreur lors de la récupération des achats énergie échoués:', error);
          return of(null);
        })
      ),
      debtSuccess: this._transactionDetteAPI.getAllByMeternum(meterNum, { page: 0, size: 5 }).pipe(
        catchError((error) => {
          console.error('Erreur lors de la récupération des transactions dette réussies:', error);
          return of(null);
        })
      ),
      debtFailed: this._transactionDetteAPI.getAllEchecByMeternum(meterNum, { page: 0, size: 5 }).pipe(
        catchError((error) => {
          console.error('Erreur lors de la récupération des transactions dette échouées:', error);
          return of(null);
        })
      ),
    }).subscribe({
      next: ({ client, dette, energySuccess, energyFailed, debtSuccess, debtFailed }) => {
        this.clientInfo = this.mapClientInfo(client);
        this.soldeDette = this.mapSoldeDette(dette);
        this.energySuccessTransactions = this.extractTransactions<Transaction>(energySuccess);
        this.energyFailedTransactions = this.extractTransactions<TransactionEchec>(energyFailed);
        this.debtSuccessTransactions = this.extractTransactions<TransactionDette>(debtSuccess);
        this.debtFailedTransactions = this.extractTransactions<TransactionDetteEchec>(debtFailed);

        if (
          !this.clientInfo &&
          !this.soldeDette &&
          this.energySuccessTransactions.length === 0 &&
          this.energyFailedTransactions.length === 0 &&
          this.debtSuccessTransactions.length === 0 &&
          this.debtFailedTransactions.length === 0
        ) {
          this.toastService.error('Erreur', "Aucune information trouvée pour ce numéro de compteur.");
        }

        this.hasSearched = true;
        this.loadingBtn = false;
      },
      error: (error) => {
        console.error('Erreur lors de la recherche client:', error);
        this.toastService.error('Erreur', "Une erreur est survenue lors de la recherche des informations du client.");
        this.hasSearched = false;
        this.loadingBtn = false;
      },
    });
  }

  private extractResult(response: ApiOneResponse<any> | null): any | null {
    if (!response) {
      return null;
    }

    const data = (response as any).data;
    return data?.result !== undefined ? data.result : data ?? (response as any);
  }

  private mapClientInfo(response: ApiOneResponse<any> | null): ClientInfo | null {
    const result = this.extractResult(response);
    if (!result) {
      return null;
    }

    return {
      meterNum: result['@meterNum'],
      refCode: result['@refCode'],
      customerName: result['@customerName'],
      source: result['@customerName']?.trim() ? 'Zonos' : 'Smart-vend',
      tarif: result['@tariff'],
      statut: result['@state'],
    };
  }

  private mapSoldeDette(response: ApiOneResponse<any> | null): SoldeDette | null {
    const result = this.extractResult(response);
    if (!result) {
      return null;
    }

    return {
      meterNum: result['@meterNum'],
      solde: this.parseAmount(result['@balanceAMT']),
      devise: 'FCFA',
    };
  }

  private extractTransactions<T>(response: unknown): T[] {
    const data = (response as { data?: unknown } | null)?.data;
    return Array.isArray(data) ? data.slice(0, 5) as T[] : [];
  }

  private parseAmount(value: unknown): number | undefined {
    if (value === null || value === undefined || value === '') {
      return undefined;
    }

    const amount = Number(value);
    return Number.isNaN(amount) ? undefined : amount;
  }

  // Permet d'afficher dynamiquement dans le template les champs
  // additionnels renvoyés par l'API sans devoir les lister un à un.
  get clientInfoEntries(): { key: string; label: string; value: any }[] {
    if (!this.clientInfo) {
      return [];
    }
    return Object.keys(this.clientInfo)
      .filter((key) => key !== 'statut' && this.clientInfo![key] !== null && this.clientInfo![key] !== undefined && this.clientInfo![key] !== '')
      .map((key) => ({ key, label: this.fieldLabels[key] || key, value: this.clientInfo![key] }));
  }
}
