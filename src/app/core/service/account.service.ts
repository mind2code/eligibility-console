import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { url_path } from "../constants/endpoints.constant";
import { Account } from "../model/account.model";
import { ApiRequestService } from "./globals/api-request.service";
import { ApiPaginatedResponse } from "../model/api-response.model";

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private _apiRequestService: ApiRequestService) { }

  getAll() {
    return this._apiRequestService.getAll(url_path.COMPTES + '/all');
  }

  getAllByPage(paginationData: any): Observable<ApiPaginatedResponse<Account>> {
    return this._apiRequestService.getByPage({ endpoint: url_path.COMPTES, paginationData });
  }

  getById(id: string) {
    return this._apiRequestService.getById(url_path.COMPTES + '/' + id);
  }

  save(data: Account) {
    return this._apiRequestService.post({ endpoint: url_path.COMPTES, data: JSON.stringify(data) });
  }

  update(id?: string, data?: any) {
    return this._apiRequestService.put({ endpoint: url_path.COMPTES + '/' + id, data: JSON.stringify(data) });
  }
  recharger(accountNumber?: string, data?: any) {
    return this._apiRequestService.post({ endpoint: url_path.COMPTES + '/' + accountNumber + '/credit', data: JSON.stringify(data)});
  }

  delete(id: string) {
    return this._apiRequestService.delete(url_path.COMPTES + '/' + id);
  }
}
