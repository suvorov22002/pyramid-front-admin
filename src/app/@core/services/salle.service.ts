import { Injectable } from '@angular/core';
import { Salle, SalleData } from '../data/salle';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalleService extends SalleData{
  
  private namespace: String = "api/v1/rooms"
  private API_URL: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
    super();
  }

  createRoom(salle: Salle): Observable<Salle> {
    return this.httpClient.post<Salle>(`${this.API_URL}/${this.namespace}`, salle, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  listAllRooms(): Observable<Salle[]> {
    throw new Error('Method not implemented.');
  }
  
  updateEnroll(id: number, salle: Salle): Observable<Salle> {
    throw new Error('Method not implemented.');
  }

}
