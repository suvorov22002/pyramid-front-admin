import { Injectable } from "@angular/core";
import { BetKeno, BettingKenoData } from "../data/betKeno";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class BettingService extends BettingKenoData {

    private namespace: String = "api/v1/bets"
    private API_URL: string = environment.apiUrl;

    constructor(private httpClient: HttpClient) {
        super();
    }

    createKenoBet(keno: BetKeno): Observable<BetKeno> {
        throw new Error("Method not implemented.");
    }
    listAllBetPartner(partner: string): Observable<BetKeno[]> {
        return this.httpClient.get<BetKeno[]>(`${this.API_URL}/${this.namespace}/all/partner/${partner}`)
    }
    listAllBetPartnerRoom(partner: string, room: string): Observable<BetKeno[]> {
        throw new Error("Method not implemented.");
    }
    createRoom(keno: BetKeno): Observable<BetKeno> {
        throw new Error("Method not implemented.");
    }

}