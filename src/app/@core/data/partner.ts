import { Observable } from "rxjs";
import { RequestResponse } from ".";

export interface Partner {
    id?: number | null;
    codePartner?: string | null;
    designation: string;
    localisation: string;
    status: string;
    games?: string[] | null;
    parameters?: number | null;
}

export interface PartnerResponse extends RequestResponse<Partner[]> { }

export abstract class PartnerData {
    abstract createNewPartner(partner: Partner): Observable<RequestResponse<Partner>>;
    abstract listAllPartners(): Observable<PartnerResponse>;
    abstract updatePartnerStatus(data: any): Observable<Partner>;
}