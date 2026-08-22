export interface DashboardKpi {
  comptesActifs: number;
  soldeTotalDisponible: number;
  montantTotalReserve: number;

  sessionsCaisseOuvertes: number;
  compteursEnregistres: number;
  utilisateursActifs: number;

  ventesDuJourCount: number;
  ventesDuJourMontant: number;

  transactionsDuJourCount: number;
  transactionsDuJourMontant: number;
}

export interface StatutCount {
  statut: string;
  total: number;
}

export interface VenteJournaliere {
  jour: string; // format ISO (yyyy-MM-dd)
  nombre: number;
  montant: number;
}

export interface VenteRecente {
  id: number;
  meterNumber?: string;
  montant: number;
  typeOperation?: string;
  modeReglement?: string;
  agent?: string;
  dateTransaction: string;
}

export interface SessionCaisseOuverte {
  id: string;
  agent?: string;
  dateOuverture: string;
  soldeInitial: number;
  soldeTheorique: number;
}

export interface DashboardSummary {
  kpis: DashboardKpi;
  transactionsParStatut: StatutCount[];
  ventesSeptDerniersJours: VenteJournaliere[];
  dernieresVentes: VenteRecente[];
  sessionsOuvertes: SessionCaisseOuverte[];
}
