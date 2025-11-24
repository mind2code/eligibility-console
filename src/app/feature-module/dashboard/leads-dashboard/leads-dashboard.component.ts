/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ViewChild } from '@angular/core';
import { BreadCrumbItems } from '../../../shared/models/models';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexGrid,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ChartComponent,
} from 'ng-apexcharts';
import { routes } from '../../../shared/routes/routes';
export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
}
@Component({
    selector: 'app-leads-dashboard',
    templateUrl: './leads-dashboard.component.html',
    styleUrl: './leads-dashboard.component.scss',
    standalone: false
})
export class LeadsDashboardComponent implements OnInit{

  breadCrumbItems: BreadCrumbItems[] =[];

  routes = routes
  constructor() {

  }
  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'Dashboards' },
      { label: 'Leads Dashboard', active: true }
  ];

  }
}
