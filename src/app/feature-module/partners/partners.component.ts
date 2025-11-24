/* eslint-disable @typescript-eslint/no-explicit-any */
import {AfterViewInit, Component, inject, OnInit, ViewChild} from '@angular/core';
import { routes } from '../../shared/routes/routes';
import { BreadCrumbItems, pageSelection } from '../../shared/models/models';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../../shared/data/data.service';
import { Router } from '@angular/router';
import { PaginationService, tablePageSize } from '../../shared/custom-pagination/pagination.service';
import {MatSort, Sort} from '@angular/material/sort';
import {PartnerStore} from "../../shared/stores/partner.store";
import {Partner} from "../../model/partner.model";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexGrid,
  ApexStroke, ApexTitleSubtitle,
  ApexXAxis,
  ChartComponent
} from "ng-apexcharts";
import {MatPaginator} from "@angular/material/paginator";

export interface ChartOptions  {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-companies',
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss',
  standalone: false
})
export class PartnersComponent implements AfterViewInit {

  @ViewChild('chart')
  chart!: ChartComponent;
  public Areachart: Partial<ChartOptions> | any;
  public Areachart2: Partial<ChartOptions> | any;
  public Areachart3: Partial<ChartOptions> | any;
  public Areachart4: Partial<ChartOptions> | any;

  public routes = routes;
  store = inject(PartnerStore);
  initChecked = false;
  // pagination variables
  public pageSize = 10;
  public tableData: Partner[] = [];
  public tableDataCopy: Partner[] = [];
  public actualData: Partner[] = [];
  public currentPage = 1;
  public skip = 0;
  public limit: number = this.pageSize;
  public serialNumberArray: number[] = [];
  public totalData = 0;
  showFilter = false;
  public pageSelection: pageSelection[] = [];

  displayedColumns: string[] = ['id', 'code', 'name', 'phone'];
  dataSource!: MatTableDataSource<Partner>;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;


  public searchDataValue = '';

  breadCrumbItems: BreadCrumbItems[] =[];

  public password: boolean[] = [false,false,false,false];

  constructor(
    private data: DataService,
    private router: Router,
    private pagination: PaginationService
  ) {
    this.breadCrumbItems = [
      { label: 'Partenaires' },
      { label: 'Liste des partenaires', active: true }
    ];

    //this.tableData = this.store.partners();
    this.dataSource = new MatTableDataSource(this.store.partners());

  }

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
    // @ts-ignore
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  async loadPartners() {
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
    this.pagination.tablePageSize.next({
      skip: this.skip,
      limit: this.limit,
      pageSize: this.pageSize,
    });
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

    this.Areachart = {
      series: [{
        name: "",
        data: [25, 66, 41, 12, 36, 9, 21]
      }],
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0, // Start with 0 opacity (transparent)
          opacityTo: 0    // End with 0 opacity (transparent)
        }
      },
      chart: {
        foreColor: '#fff',
        type: "area",
        width: 50,
        toolbar: {
          show: !1
        },
        zoom: {
          enabled: !1
        },
        dropShadow: {
          enabled: 0,
          top: 3,
          left: 14,
          blur: 4,
          opacity: .12,
          color: "#fff"
        },
        sparkline: {
          enabled: !0
        }
      },
      markers: {
        size: 0,
        colors: ["#F26522"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      plotOptions: {
        bar: {
          horizontal: !1,
          columnWidth: "35%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: !1
      },
      stroke: {
        show: !0,
        width: 2.5,
        curve: "smooth"
      },
      colors: ["#F26522"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: !1
        },
        x: {
          show: !1
        },

        marker: {
          show: !1
        }
      }
    };
    this.Areachart2 = {
      series: [{
        name: "",
        data: [25, 40, 35, 20, 36, 9, 21]
      }],
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0, // Start with 0 opacity (transparent)
          opacityTo: 0    // End with 0 opacity (transparent)
        }
      },
      chart: {
        foreColor: '#fff',
        type: "area",
        width: 50,
        toolbar: {
          show: !1
        },
        zoom: {
          enabled: !1
        },
        dropShadow: {
          enabled: 0,
          top: 3,
          left: 14,
          blur: 4,
          opacity: .12,
          color: "#fff"
        },
        sparkline: {
          enabled: !0
        }
      },
      markers: {
        size: 0,
        colors: ["#F26522"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      plotOptions: {
        bar: {
          horizontal: !1,
          columnWidth: "35%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: !1
      },
      stroke: {
        show: !0,
        width: 2.5,
        curve: "smooth"
      },
      colors: ["#F26522"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: !1
        },
        x: {
          show: !1
        },

        marker: {
          show: !1
        }
      }
    };
    this.Areachart3 = {
      series: [{
        name: "",
        data: [25, 10, 35, 5, 25, 28, 21]
      }],
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0, // Start with 0 opacity (transparent)
          opacityTo: 0    // End with 0 opacity (transparent)
        }
      },
      chart: {
        foreColor: '#fff',
        type: "area",
        width: 50,
        toolbar: {
          show: !1
        },
        zoom: {
          enabled: !1
        },
        dropShadow: {
          enabled: 0,
          top: 3,
          left: 14,
          blur: 4,
          opacity: .12,
          color: "#fff"
        },
        sparkline: {
          enabled: !0
        }
      },
      markers: {
        size: 0,
        colors: ["#F26522"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      plotOptions: {
        bar: {
          horizontal: !1,
          columnWidth: "35%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: !1
      },
      stroke: {
        show: !0,
        width: 2.5,
        curve: "smooth"
      },
      colors: ["#F26522"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: !1
        },
        x: {
          show: !1
        },

        marker: {
          show: !1
        }
      }
    };
    this.Areachart4 = {
      series: [{
        name: "",
        data: [30, 40, 15, 23, 20, 23, 25]
      }],
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0, // Start with 0 opacity (transparent)
          opacityTo: 0    // End with 0 opacity (transparent)
        }
      },
      chart: {
        foreColor: '#fff',
        type: "area",
        width: 50,
        toolbar: {
          show: !1
        },
        zoom: {
          enabled: !1
        },
        dropShadow: {
          enabled: 0,
          top: 3,
          left: 14,
          blur: 4,
          opacity: .12,
          color: "#fff"
        },
        sparkline: {
          enabled: !0
        }
      },
      markers: {
        size: 0,
        colors: ["#F26522"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      plotOptions: {
        bar: {
          horizontal: !1,
          columnWidth: "35%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: !1
      },
      stroke: {
        show: !0,
        width: 2.5,
        curve: "smooth"
      },
      colors: ["#F26522"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: !1
        },
        x: {
          show: !1
        },

        marker: {
          show: !1
        }
      }
    };
    this.loadPartners().then(() => console.log('Partners Loaded'));

  }
}
