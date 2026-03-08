import { Injectable, inject } from "@angular/core"
import { url_path } from "../constants/endpoints.constant"
import { TransactionDette } from "../model/transaction-dette.model"
import { TransactionDetteEchec } from "../model/transaction-dette-echec.model"
import { ApiPaginatedResponse } from "../model/api-response.model"
import { ApiRequestService } from "./globals/api-request.service"
import { Observable } from "rxjs"

@Injectable({
    providedIn: 'root'
})
export class TransactionDetteService {
    private _apiRequestService = inject(ApiRequestService)

    getAll(paginationData: any): any {
        return this._apiRequestService.getByPage({ endpoint: url_path.TRANSACTIONS_DETTE, paginationData: paginationData });
    }
    getAllEchec(paginationData: any): any {
        return this._apiRequestService.getByPage({ endpoint: url_path.TRANSACTIONS_DETTE+'/echec', paginationData: paginationData });
    }

    getByTransID(transID: string, paginationData: any): any {
        return this._apiRequestService.getByPage({ endpoint: url_path.TRANSACTIONS_DETTE + '/bytransid/' + transID, paginationData: paginationData });
    }
    getEchecByTransID(transID: string, paginationData: any): any {
        return this._apiRequestService.getByPage({ endpoint: url_path.TRANSACTIONS_DETTE + '/echec/bytransid/' + transID, paginationData: paginationData });
    }

    getAllByMeternum(meterNum: string, paginationData: any): any {
        return this._apiRequestService.getByPage({ endpoint: url_path.TRANSACTIONS_DETTE + '/bymeternum/' + meterNum, paginationData: paginationData });
    }
    getAllEchecByMeternum(meterNum: string, paginationData: any): any {
        return this._apiRequestService.getByPage({ endpoint: url_path.TRANSACTIONS_DETTE + '/echec/bymeternum/' + meterNum, paginationData: paginationData });
    }

    getAllByDate(date: string, paginationData: any): any {
        return this._apiRequestService.getByPage({ endpoint: url_path.TRANSACTIONS_DETTE + '/bydate/' + date, paginationData: paginationData });
    }
    getAllEchecByDate(date: string, paginationData: any): any {
        return this._apiRequestService.getByPage({ endpoint: url_path.TRANSACTIONS_DETTE + '/echec/bydate/' + date, paginationData: paginationData });
    }

    getAllByPartner(apmlogin: string, paginationData: any): any {
        return this._apiRequestService.getByPage({ endpoint: url_path.TRANSACTIONS_DETTE + '/bypartner/' + apmlogin, paginationData: paginationData });
    }
    getAllEchecByPartner(apmlogin: string, paginationData: any): any {
        return this._apiRequestService.getByPage({ endpoint: url_path.TRANSACTIONS_DETTE + '/echec/bypartner/' + apmlogin, paginationData: paginationData });
    }
}