import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { url_path } from '../constants/endpoints.constant';
import { ApiRequestService } from './globals/api-request.service';
import { ApiOneResponse } from '../model/api-response.model';
import { ClientInfo } from '../model/client-info.model';
import { SoldeDette } from '../model/solde-dette.model';
import { Transaction } from '../model/transaction.model';

/**
 * Ce service consomme les endpoints "vending" tels que définis dans la
 * collection Postman "ZonosVending Ousmane" :
 *  - GET  /vending/v1/client/search/{meterNum}/json
 *  - POST /vending/v1/solde-dette/json        body: <xml meterNum="{meterNum}"/>
 *  - POST /vending/v1/last5transactions/json  body: <xml meterNum="{meterNum}"/>
 *
 * Ces appels transitent par le backend applicatif ({environment.apiUrl}),
 * qui reproduit le même chemin que la passerelle vending (apm-ext.univers.ci)
 * et se charge de l'authentification OAuth2 (Get Token) ainsi que du relais
 * vers cette dernière. On n'appelle jamais apm-ext.univers.ci directement
 * depuis le navigateur : cela exposerait le secret client OAuth2 et se
 * heurterait au CORS.
 */
@Injectable({
  providedIn: 'root',
})
export class ClientVendingService {
  private _apiRequestService = inject(ApiRequestService);

  /**
   * GET /vending/v1/client/search/{meterNum}/json
   */
  searchClient(meterNum: string): Observable<ApiOneResponse<ClientInfo>> {
    return this._apiRequestService.getById(url_path.VENDING + '/client/search/' + meterNum + '/json');
  }

  /**
   * POST /vending/v1/solde-dette/json
   * body: <xml meterNum="{meterNum}"/>
   */
  getSoldeDette(meterNum: string): Observable<ApiOneResponse<SoldeDette>> {
    return this._apiRequestService.postRaw({
      endpoint: url_path.VENDING + '/solde-dette/json',
      data: this.buildMeterNumXml(meterNum),
      contentType: 'application/xml',
    });
  }

  /**
   * POST /vending/v1/last5transactions/json
   * body: <xml meterNum="{meterNum}"/>
   */
  getLast5Transactions(meterNum: string): Observable<ApiOneResponse<Transaction[]>> {
    return this._apiRequestService.postRaw({
      endpoint: url_path.VENDING + '/last5transactions/json',
      data: this.buildMeterNumXml(meterNum),
      contentType: 'application/xml',
    });
  }

  private buildMeterNumXml(meterNum: string): string {
    return `<xml meterNum="${meterNum}"/>`;
  }
}
