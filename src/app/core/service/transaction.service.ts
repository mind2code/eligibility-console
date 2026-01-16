import { Injectable, inject } from "@angular/core"
import { url_path } from "../constants/endpoints.constant"
import { Transaction } from "../model/transaction.model"
import { ApiPaginatedResponse } from "../model/api-response.model"
import { ApiRequestService } from "./globals/api-request.service"
import { Observable } from "rxjs"

@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    private _apiRequestService = inject(ApiRequestService)

    getAll(paginationData: any): Observable<ApiPaginatedResponse<Transaction>> {
        return this._apiRequestService.getByPage({ endpoint: url_path.TRANSACTIONS, paginationData: paginationData });
    }

    getByTransID(transID: string, paginationData: any): Observable<ApiPaginatedResponse<Transaction>> {
        return this._apiRequestService.getByPage({ endpoint: url_path.TRANSACTIONS + '/bytransid/' + transID, paginationData: paginationData });
    }

    getAllByMeternum(meterNum: string, paginationData: any): Observable<ApiPaginatedResponse<Transaction>> {
        return this._apiRequestService.getByPage({ endpoint: url_path.TRANSACTIONS + '/bymeternum/' + meterNum, paginationData: paginationData });
    }

    getAllByDate(date: string, paginationData: any): Observable<ApiPaginatedResponse<Transaction>> {
        return this._apiRequestService.getByPage({ endpoint: url_path.TRANSACTIONS + '/bydate/' + date, paginationData: paginationData });
    }

    getAllByPartner(apmlogin: string, paginationData: any): Observable<ApiPaginatedResponse<Transaction>> {
        return this._apiRequestService.getByPage({ endpoint: url_path.TRANSACTIONS + '/bypartner/' + apmlogin, paginationData: paginationData });
    }
}
