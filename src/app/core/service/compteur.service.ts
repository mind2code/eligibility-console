import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { url_path } from "../constants/endpoints.constant";
import { Device } from "../model/device.model";
import { ApiRequestService } from "./globals/api-request.service";
import { ApiPaginatedResponse } from "../model/api-response.model";

@Injectable({
  providedIn: 'root',
})
export class CompteurService {

  constructor(private _apiRequestService: ApiRequestService) {
  }

  getAll() {
    return this._apiRequestService.getAll(url_path.COMPTEURS + '/all');
  }

  getAllByPage(paginationData: any): Observable<ApiPaginatedResponse<Device>> {
    return this._apiRequestService.getByPage({ endpoint: url_path.COMPTEURS, paginationData: paginationData });
  }

  getById(id: string) {
    return this._apiRequestService.getById(url_path.COMPTEURS + '/' + id);
  }

  save(data: Device) {
    return this._apiRequestService.post({ endpoint: url_path.COMPTEURS, data: JSON.stringify(data) })
  }
  upload(data: any) {
    return this._apiRequestService.postForFile({ endpoint: url_path.COMPTEURS + '/upload', data: data })
  }

  /**
   * Search compteurs by serialNumber (paginated)
   * Use existing endpoint pattern: /{serialNumber}/search
   * paginationData = { page: number, size: number }
   */
  search(serialNumber: string, paginationData?: any): Observable<ApiPaginatedResponse<Device>> {
    return this._apiRequestService.getByPage({ endpoint: url_path.COMPTEURS + '/' + serialNumber + '/search', paginationData: (paginationData || {}) });
  }

  update(id?: any, data?: any) {
    return this._apiRequestService.put({ endpoint: url_path.COMPTEURS + '/' + id, data: JSON.stringify(data) })
  }

  delete(id: any) {
    return this._apiRequestService.delete(url_path.COMPTEURS + "/" + id)
  }

}
