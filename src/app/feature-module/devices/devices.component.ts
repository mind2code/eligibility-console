import {Component, inject, OnInit} from '@angular/core';
import {DeviceStore} from "../../shared/stores/device.store";
import { routes } from '../../shared/routes/routes';
import { apiResultFormat, BreadCrumbItems, CompanyAccount, pageSelection } from '../../shared/models/models';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../../shared/data/data.service';
import { Router } from '@angular/router';
import { PaginationService, tablePageSize } from '../../shared/custom-pagination/pagination.service';
import { Sort } from '@angular/material/sort';
import {PartnerStore} from "../../shared/stores/partner.store";
import {Device} from "../../model/device.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Validators} from "ngx-editor";

@Component({
  selector: 'app-devices',
  standalone: false,
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.scss'
})
export class DevicesComponent implements OnInit {
  breadCrumbItems: BreadCrumbItems[] =[];

  store = inject(DeviceStore)
  public routes = routes;
  initChecked = false;
  // pagination variables
  public pageSize = 10;
  public tableData: Device[] = [];
  public tableDataCopy: Device[] = [];
  public actualData: Device[] = [];
  public currentPage = 1;
  public skip = 0;
  public limit: number = this.pageSize;
  public serialNumberArray: number[] = [];
  public totalData = 0;
  showFilter = false;
  public pageSelection: pageSelection[] = [];
  dataSource!: MatTableDataSource<Device>;
  public searchDataValue = '';

  fb = inject(FormBuilder);

  deviceForm: FormGroup = this.fb.group({});

  constructor(
    private data: DataService,
    private router: Router,
    private pagination: PaginationService
  ) {
    this.breadCrumbItems = [
      { label: 'Compteurs' },
      { label: 'Liste des compteurs', active: true }
    ];
    this.deviceForm = this.fb.group({
      serialNumber: ['', Validators.required],
    })
  }


  public password: boolean[] = [false,false,false,false];


  togglePassword(index: number) {
    this.password[index] = !this.password[index];
  }

  async loadDevices() {
    await this.store.fetchAll();
  }

  private getTableData(pageOption: pageSelection): void {
    /*this.data.getCompanies().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.tableDataCopy = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: CompanyAccount, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.tableDataCopy.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<CompanyAccount>(this.actualData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        tableDataCopy: this.tableDataCopy,
        serialNumberArray: this.serialNumberArray,
      });
    }); */
  }

  public searchData(value: string): void {
    if (value == '') {
      this.tableData = this.tableDataCopy;
    } else {
      this.dataSource.filter = value.trim().toLowerCase();
      this.tableData = this.dataSource.filteredData;
    }
  }

  public sortData(sort: Sort) {
    const data = this.tableData.slice();

    if (!sort.active || sort.direction === '') {
      this.tableData = data;
    } else {
      this.tableData = data.sort((a, b) => {
        const aValue = (a as never)[sort.active];

        const bValue = (b as never)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public changePageSize(pageSize: number): void {
    this.pageSelection = [];
    this.limit = pageSize;
    this.skip = 0;
    this.currentPage = 1;
    /* this.pagination.tablePageSize.next({
      skip: this.skip,
      limit: this.limit,
      pageSize: this.pageSize,
    }); */
  }
  selectAll(initChecked: boolean) {
    /* if (!initChecked) {
      this.tableData.forEach((f) => {
        f.isSelected = true;
      });
    } else {
      this.tableData.forEach((f) => {
        f.isSelected = false;
      });
    }*/
  }


  ngOnInit(): void {
    this.loadDevices().then(() => console.log(this.store.devices()));
  }

  save() {
    console.log(this.deviceForm.value);
    if (this.deviceForm.valid) {
      this.store.create(this.deviceForm.value);
    }
    console.log('save');
  }


}
