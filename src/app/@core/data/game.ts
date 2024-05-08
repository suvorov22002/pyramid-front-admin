import { Observable } from "rxjs";
import { RequestResponse } from ".";

export interface Game {
    id?: number | null;
    code: string;
    designation: string;
    description?: string;
    status?: string;
}

export interface GameResponse extends RequestResponse<Game> { }

export abstract class GameData {
    abstract createGame(game: Game): Observable<Game>;
    abstract listAllgames(): Observable<Game[]>;
    abstract listAllPartnerGames(code: string): Observable<Game[]>;
    abstract updateGameStatus(data: any): Observable<Game>;
}