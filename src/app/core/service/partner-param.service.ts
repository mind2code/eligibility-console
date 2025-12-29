import { Injectable } from "@angular/core";
import { url_path } from "../constants/endpoints.constant";
import { PartnerParamRequest } from "../model/dto/partner-param-request.model";
import { ApiRequestService } from "./globals/api-request.service";

@Injectable({
    providedIn: 'root',
})
export class PartnerParamService {

    constructor(private _apiRequestService: ApiRequestService) {
    }

    getAll() {
        return this._apiRequestService.getAll(url_path.PARTENAIRES_PARAMS);
    }
    getAllByPartner(partnerId: string) {
        return this._apiRequestService.getAll(url_path.PARTENAIRES_PARAMS + '/bypartner/' + partnerId);
    }

    save(data: PartnerParamRequest[], partnerId: string) {
        return this._apiRequestService.post({ endpoint: url_path.PARTENAIRES_PARAMS + '/' + partnerId, data: JSON.stringify(data) })
    }

}