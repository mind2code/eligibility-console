import { Partner } from "./partner.model";

export interface PartnerParam {
    id?: string;
    paramKey?: string;
    paramValue?: string;
    partner?: Partner;
}