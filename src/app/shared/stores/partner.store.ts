import {patchState, signalStore, withMethods, withState} from "@ngrx/signals";
import {Partner} from "../../model/partner.model";
import {PartnerService} from "../../service/partner.service";
import {inject} from "@angular/core";
import {ApiPaginatedResponse} from "../models/api-response.model";

export type PartnersFilter = "all" | "active" | "completed";

type PartnerState = {
  partners: Partner[],
  loading:boolean,
  filter: PartnersFilter;
}

const initialState : PartnerState = {
  partners: [],
  loading: false,
  filter: 'all'
}


export const PartnerStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods(
    (store, partnerService = inject(PartnerService)) => ({
      async fetchAll() {
        patchState(store, { loading: true });
        const partners = await partnerService.getAll();
        patchState(store, { partners, loading: false });
      }
    })
  ),
)
