import { Observable } from "rxjs";
import { RequestResponse } from ".";

export interface Parameter {
    id?: number | null;
    miseMin: number;
    miseMax: number;
    percent: number;
    bonusRate: number;
    bonusMax: number;
    partner?: string;
}

export interface ParameterResponse extends RequestResponse<Parameter> { }

export abstract class ParameterData {
    abstract updateParameter(id: number, parameter: Parameter): Observable<ParameterResponse>;
    abstract listAllParameters(): Observable<ParameterResponse>;
    abstract selectPartner(id: number): Observable<Parameter>;
}