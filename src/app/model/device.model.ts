
export interface Device {
  id: number;
  serialNumber: string;
  externalReference: string;
  fabricant: number;
  modele: number;
  dateFabrication: Date;
  puissance: string;
  sgc: string;
  krn: string;
  tariff: string;
  algorithme: string;
  stsVersion: string;
  dateBase: string;
  statut: number;
  dateCreation: Date;
}
