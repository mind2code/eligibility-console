import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { url_path } from "../constants/endpoints.constant";
import { ApiPaginatedResponse } from "../model/api-response.model";
import { Device } from "../model/device.model";
import { Dictionnaire } from "../model/dictionnaire.model";
import { ApiRequestService } from "./globals/api-request.service";

@Injectable({
  providedIn: 'root',
})
export class DictionnaireService {

  constructor(private _apiRequestService: ApiRequestService) {
  }

  getAll() {
    return this._apiRequestService.getAll(url_path.DICTIONNAIRES + '/all');
  }

  getAllByPage(paginationData: any): Observable<ApiPaginatedResponse<Dictionnaire>> {
    return this._apiRequestService.getByPage({ endpoint: url_path.DICTIONNAIRES, paginationData: paginationData });
  }

  getById(id: string) {
    return this._apiRequestService.getById(url_path.DICTIONNAIRES + '/' + id);
  }
  getCategories() {
    return this._apiRequestService.getAll(url_path.DICTIONNAIRES + '/categories');
  }
  getByCategorie(categorie: any) {
    return this._apiRequestService.getByPage({endpoint: url_path.DICTIONNAIRES + '/categorie', paginationData: categorie });
  }

  save(data: Device) {
    return this._apiRequestService.post({ endpoint: url_path.DICTIONNAIRES, data: JSON.stringify(data) })
  }

  update(id?: number, data?: any) {
    return this._apiRequestService.put({ endpoint: url_path.DICTIONNAIRES + '/' + id, data: JSON.stringify(data) })
  }

  delete(id: number) {
    return this._apiRequestService.delete(url_path.DICTIONNAIRES + "/" + id)
  }

}
