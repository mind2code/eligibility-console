import {patchState, signalStore, withMethods, withState} from "@ngrx/signals";
import {Partner} from "../../model/partner.model";
import {PartnerService} from "../../service/partner.service";
import {inject} from "@angular/core";
import {ApiPaginatedResponse} from "../models/api-response.model";
import {Device} from "../../model/device.model";
import {DeviceService} from "../../service/device.service";
import {CreateDeviceDto} from "../../model/dto/create-device.dto";

export type PartnersFilter = "all" | "active" | "completed";

type DeviceState = {
  devices: Device[],
  loading:boolean,
  filter: PartnersFilter;
}

const initialState : DeviceState = {
  devices: [],
  loading: false,
  filter: 'all'
}


export const DeviceStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods(
    (store, deviceService = inject(DeviceService)) => ({
      async fetchAll() {
        patchState(store, { loading: true });
        const devices = await deviceService.getAll();
        patchState(store, { devices, loading: false });
      },
      async create(device: CreateDeviceDto) {
        const id = deviceService.create(device);
        patchState(store, (state) => ({
          devices: [...state.devices]
        }))
      },
      async check(device: string) {
        const exists = deviceService.check(device);
        patchState(store, (state) => ({
          devices: [...state.devices]
        }))
      }
    }),
  ),
)
