import { Observable } from "rxjs";
import { RequestResponse } from ".";

export interface Salle {
    id?: number | null;
    status?: string;
    designation: string;
    localisation: string;
    partnerCode: string;
    codeSalle?: string;
}

export interface SalleResponse extends RequestResponse<Salle> { }

export abstract class SalleData {
    abstract createRoom(salle: Salle): Observable<Salle>;
    abstract listAllRooms(): Observable<Salle[]>;
    abstract listAllPartnerRooms(code: string): Observable<Salle[]>;
    abstract updateEnroll(id: number, salle: Salle): Observable<Salle>;
    abstract listAllRoomPartner(code: string): Observable<Salle[]>;
    abstract updateSalleStatus(data: any): Observable<Salle>;
}