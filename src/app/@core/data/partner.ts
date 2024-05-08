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
    abstract createNewPartner(partner: Partner): Observable<Partner>;
    abstract listAllPartners(): Observable<Partner[]>;
    abstract updatePartnerStatus(data: any): Observable<Partner>;
    abstract listPartners(): Observable<Partner[]>;
    abstract listPartnerByCode(code: string): Observable<Partner[]>;
}