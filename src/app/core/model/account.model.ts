export type Account = {
  id: string;
  accountNumber: string;
  partner: string; // partner id
  balance: number;
  lastUpdated?: string; // ISO date string
  montantReserve?: number;
  version?: number;
};
