import {Component, inject} from '@angular/core';
import {BreadCrumbItems} from "../../../shared/models/models";
import {DeviceService} from "../../../service/device.service";

@Component({
  selector: 'app-device-search',
  standalone: false,
  templateUrl: './device-search.component.html',
  styleUrl: './device-search.component.scss'
})
export class DeviceSearchComponent {

  breadCrumbItems: BreadCrumbItems[] =[];

  deviceSerialNo: string = '';

  existDevice: boolean = false;
  isVerify:boolean = false;

  deviceService = inject(DeviceService);

  constructor() {
    this.breadCrumbItems = [
      { label: 'Compteurs' },
      { label: 'Rechercher', active: true }
    ];
  }

  checkIfExists() {
    this.deviceService.checkDevice(this.deviceSerialNo).subscribe((res) => {
      console.log(res);
      this.isVerify = true;
      this.existDevice = res.exist;
    })
  }
}
