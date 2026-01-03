import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { url_path } from "../constants/endpoints.constant";
import { Vendor } from "../model/vendor.model";
import { ApiRequestService } from "./globals/api-request.service";
import { ApiPaginatedResponse } from "../model/api-response.model";

@Injectable({
  providedIn: 'root',
})
export class VendorService {

  constructor(private _apiRequestService: ApiRequestService) {
  }

  getAll() {
    return this._apiRequestService.getAll(url_path.VENDEURS + '/all');
  }

  getAllByPage(paginationData: any): Observable<ApiPaginatedResponse<Vendor>> {
    return this._apiRequestService.getByPage({ endpoint: url_path.VENDEURS, paginationData: paginationData });
  }

  getById(id: string) {
    return this._apiRequestService.getById(url_path.VENDEURS + '/' + id);
  }

  save(data: Vendor) {
    return this._apiRequestService.post({ endpoint: url_path.VENDEURS, data: JSON.stringify(data) })
  }

  update(id?: string, data?: any) {
    return this._apiRequestService.put({ endpoint: url_path.VENDEURS + '/' + id, data: JSON.stringify(data) })
  }

  updateStatus(id: string, status: boolean) {
    return this._apiRequestService.put({ endpoint: url_path.VENDEURS + '/update-status/' + id, data: JSON.stringify({ status: status }) })
  }

  delete(id: string) {
    return this._apiRequestService.delete(url_path.VENDEURS + "/" + id)
  }

  reinitPassword(userId: string, password: string) {
    return this._apiRequestService.getById(url_path.VENDEURS + '/' + userId + '/' + password)
  }
}

