import {HttpClient, HttpHeaders} from "@angular/common/http";
import {inject, Injectable} from "@angular/core";
import {firstValueFrom, Observable} from "rxjs";
import {Partner} from "../model/partner.model";
import {ApiPaginatedResponse} from "../shared/models/api-response.model";
import Keycloak from "keycloak-js";

@Injectable({
  providedIn: 'root',
})
export class PartnerService {

  //keycloak = inject(Keycloak);

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'Authorization': 'Bearer ' + this.keycloak.token
    }),
  };

  constructor(private http: HttpClient) {}

  async getAll() {
      const response = await firstValueFrom(this.http.get<ApiPaginatedResponse<Partner>>("/api/v1/partners", this.httpOptions));
      return response?.content;
  }
}

