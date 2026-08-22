import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { breadCrumbItems } from '../../../shared/models/models';
import { BreadcrumbsComponent } from '../../common/breadcrumbs/breadcrumbs.component';
import { CollapseHeaderComponent } from '../../common/collapse-header/collapse-header.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { DashboardService } from '../../../core/service/dashboard.service';
import { ToastService } from '../../../core/service/globals/toast.service';
import { DashboardSummary } from '../../../core/model/dashboard.model';

export interface VentesChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  colors: string[];
  legend: ApexLegend;
  tooltip: ApexTooltip;
  plotOptions: ApexPlotOptions;
}

export interface StatutsChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
}

// Libellés lisibles pour les statuts techniques renvoyés par le backend
// (Transaction.TransactionStatus : PENDING, COMPLETED, FAILED).
const STATUT_LABELS: { [key: string]: string } = {
  PENDING: 'En attente',
  COMPLETED: 'Complétées',
  FAILED: 'Échouées',
};

const STATUT_COLORS: { [key: string]: string } = {
  PENDING: '#F59E0B',
  COMPLETED: '#03C95A',
  FAILED: '#E70D0D',
};

@Component({
  selector: 'app-eligibilite-dashboard',
  standalone: true,
  templateUrl: './eligibilite-dashboard.component.html',
  styleUrl: './eligibilite-dashboard.component.scss',
  imports: [
    CommonModule,
    RouterModule,
    NgApexchartsModule,
    BreadcrumbsComponent,
    CollapseHeaderComponent,
    FooterComponent,
  ],
})
export class EligibiliteDashboardComponent implements OnInit {
  breadCrumbItems: breadCrumbItems[] = [{ label: 'Dashboard', active: true }];

  loading = true;
  loadError = false;
  summary: DashboardSummary | null = null;

  ventesChartOptions: Partial<VentesChartOptions> = {};
  statutsChartOptions: Partial<StatutsChartOptions> = {};

  private dashboardService = inject(DashboardService);
  private toastService = inject(ToastService);

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.loadError = false;

    this.dashboardService.getSummary().subscribe({
      next: (summary) => {
        this.summary = summary;
        this.buildVentesChart(summary);
        this.buildStatutsChart(summary);
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement du dashboard:', error);
        this.toastService.error('Erreur', 'Impossible de charger les données du dashboard.');
        this.loadError = true;
        this.loading = false;
      },
    });
  }

  private buildVentesChart(summary: DashboardSummary): void {
    const jours = summary.ventesSeptDerniersJours || [];
    const categories = jours.map((j) => this.formatJourCourt(j.jour));

    this.ventesChartOptions = {
      series: [
        { name: 'Montant (FCFA)', type: 'column', data: jours.map((j) => j.montant) },
        { name: 'Nombre de ventes', type: 'line', data: jours.map((j) => j.nombre) },
      ],
      chart: { height: 320, type: 'line', toolbar: { show: false } },
      colors: ['#0d6efd', '#03C95A'],
      stroke: { width: [0, 3], curve: 'smooth' },
      plotOptions: { bar: { columnWidth: '45%', borderRadius: 4 } },
      dataLabels: { enabled: false },
      xaxis: { categories },
      yaxis: [
        { title: { text: 'Montant (FCFA)' } },
        { opposite: true, title: { text: 'Nombre de ventes' } },
      ],
      grid: { borderColor: '#f1f1f1' },
      legend: { position: 'top' },
      tooltip: { shared: true, intersect: false },
    };
  }

  private buildStatutsChart(summary: DashboardSummary): void {
    const statuts = summary.transactionsParStatut || [];

    this.statutsChartOptions = {
      series: statuts.map((s) => s.total),
      chart: { height: 280, type: 'donut' },
      labels: statuts.map((s) => STATUT_LABELS[s.statut] || s.statut),
      colors: statuts.map((s) => STATUT_COLORS[s.statut] || '#6C757D'),
      legend: { position: 'bottom' },
      dataLabels: { enabled: true },
      fill: { type: 'gradient' },
    };
  }

  private formatJourCourt(iso: string): string {
    const date = new Date(iso);
    if (isNaN(date.getTime())) {
      return iso;
    }
    return date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' });
  }

  get hasStatutsData(): boolean {
    return !!this.summary?.transactionsParStatut?.length;
  }
}
