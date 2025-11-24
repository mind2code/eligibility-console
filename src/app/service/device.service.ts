import {HttpClient, HttpHeaders} from "@angular/common/http";
import {inject, Injectable} from "@angular/core";
import {firstValueFrom, Observable} from "rxjs";
import {Partner} from "../model/partner.model";
import {ApiPaginatedResponse} from "../shared/models/api-response.model";
import Keycloak from "keycloak-js";
import {Device} from "../model/device.model";
import {CreateDeviceDto} from "../model/dto/create-device.dto";
import {DeviceExistDto} from "../model/dto/device-exist.dto";

@Injectable({
  providedIn: 'root',
})
export class DeviceService {


  constructor(private http: HttpClient) {}

  async getAll() {
    const response = await firstValueFrom(
      this.http.get<ApiPaginatedResponse<Device>>("/api/v1/devices")
    );
    return response?.content;
  }

  async create(device: CreateDeviceDto) {
    const response = await firstValueFrom(
      this.http.post<Device>("/api/v1/devices", device)
    );
    return response?.id;
  }

  async check(device: string) {
    const response = await firstValueFrom(
      this.http.get<DeviceExistDto>("/api/v1/devices/" + device+"/status")
    );
    return response?.exist;
  }

   checkDevice(device: string): Observable<DeviceExistDto> {
      return this.http.get<DeviceExistDto>("/api/v1/devices/" + device+"/status")
  }


}

