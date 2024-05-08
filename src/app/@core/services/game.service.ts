import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { GameData, Game } from "../data/game";


@Injectable({
    providedIn: 'root'
})
export class GameService extends GameData {

    private namespace: String = "api/v1/games"
    private API_URL: string = environment.apiUrl;

    constructor(private httpClient: HttpClient) {
        super();
    }

    createGame(game: Game): Observable<Game> {
        return this.httpClient.post<Game>(`${this.API_URL}/${this.namespace}`, game, {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        });
    }
    listAllgames(): Observable<Game[]> {
        return this.httpClient.get<Game[]>(`${this.API_URL}/${this.namespace}/all`);
    }
    listAllPartnerGames(code: string): Observable<Game[]> {
        throw new Error('Method not implemented.');
    }
    updateGameStatus(data: any): Observable<Game> {
        return this.httpClient.put<Game>(`${this.API_URL}/${this.namespace}/${data.id}/${data.status}`, data,
            { headers: new HttpHeaders().set('content-Type', 'application/json') })
    }

}