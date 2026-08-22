import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { url_path } from '../constants/endpoints.constant';
import { ApiRequestService } from './globals/api-request.service';
import { DashboardSummary } from '../model/dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private _apiRequestService = inject(ApiRequestService);

  getSummary(): Observable<DashboardSummary> {
    return this._apiRequestService.getAll(url_path.DASHBOARD + '/summary').pipe(
      map((response: any) => (response?.data !== undefined ? response.data : response))
    );
  }
}
