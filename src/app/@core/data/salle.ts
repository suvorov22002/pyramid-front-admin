import { Observable } from "rxjs";
import { RequestResponse } from ".";

export interface Salle {
    id?: number | null;
    status?: string;
    designation: string;
    localisation: string;
    partnerCode?: string;
}

export interface SalleResponse extends RequestResponse<Salle> { }

export abstract class SalleData {
    abstract createRoom(salle: Salle): Observable<Salle>;
    abstract listAllRooms(): Observable<Salle[]>;
    abstract updateEnroll(id: number, salle: Salle): Observable<Salle>;
}