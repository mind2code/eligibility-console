import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { url_path } from "../constants/endpoints.constant";
import { Partner } from "../model/partner.model";
import { ApiRequestService } from "./globals/api-request.service";
import { ApiPaginatedResponse } from "../model/api-response.model";

@Injectable({
  providedIn: 'root',
})
export class PartnerService {

  constructor(private _apiRequestService: ApiRequestService) {
  }

  getAll() {
    return this._apiRequestService.getAll(url_path.PARTENAIRES + '/all');
  }

  getAllByPage(paginationData: any): Observable<ApiPaginatedResponse<Partner>> {
    return this._apiRequestService.getByPage({ endpoint: url_path.PARTENAIRES, paginationData: paginationData });
  }

  getById(id: number) {
    return this._apiRequestService.getById(url_path.PARTENAIRES + '/' + id);
  }
  getByLogin(login: string) {
    return this._apiRequestService.getById(url_path.PARTENAIRES + '/' + login + '/details');
  }

  getSolde() {
    return this._apiRequestService.getById(url_path.PARTENAIRES + '/solde');
  }

  save(data: Partner) {
    return this._apiRequestService.post({ endpoint: url_path.PARTENAIRES, data: JSON.stringify(data) })
  }

  update(id?: string, data?: any) {
    return this._apiRequestService.put({ endpoint: url_path.PARTENAIRES + '/' + id, data: JSON.stringify(data) })
  }

  updateStatus(id: string, status: boolean) {
    return this._apiRequestService.put({ endpoint: url_path.PARTENAIRES + '/update-status/' + id, data: JSON.stringify({ status: status }) })
  }

  delete(id: string) {
    return this._apiRequestService.delete(url_path.PARTENAIRES + "/" + id)
  }
}

