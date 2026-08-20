export interface ClientInfo {
  meterNum?: string;
  numeroContrat?: string;
  nom?: string;
  prenom?: string;
  tarif?: string;
  adresse?: string;
  telephone?: string;
  email?: string;
  partenaire?: string;
  statut?: string;
  // Champ ouvert pour tolérer les libellés additionnels renvoyés par l'API
  // sans devoir modifier ce modèle à chaque évolution du backend.
  [key: string]: any;
}
