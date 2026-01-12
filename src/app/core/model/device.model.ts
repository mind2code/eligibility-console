import { Dictionnaire } from "./dictionnaire.model";

export interface Device {
  id?: number;
  serialNumber: string
  meterSource?: string
  modele?: Dictionnaire|null
  algorithme?: string
  sgc?: string
  tariff?: string
  krn?: string
  ken?: string
  tokenTech?: string
  fabricant?: Dictionnaire|null
  externalReference?: string
  dateFabrication?: string
  puissance?: string
  stsVersion?: string
  dateBase?: string
  statut?: Dictionnaire|null
  dateCreation?: string
  meteringPointRef?: string
}
