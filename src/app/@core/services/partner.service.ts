import { Injectable } from '@angular/core';
import { Partner, PartnerData, PartnerResponse } from '../data/partner';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PartnerService extends PartnerData {

  private namespace: String = "api/v1/partners"
  private API_URL: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
    super();
  }

  createNewPartner(partner: Partner): Observable<Partner> {
    console.log("Call to Partenaires service ")
    return this.httpClient.post<Partner>(`${this.API_URL}/${this.namespace}`, partner, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
    .pipe(
      tap(data => console.log("Partner creation: ",data))
    )
  }

  listAllPartners(): Observable<Partner[]> {

    return this.httpClient.get<Partner[]>(`${this.API_URL}/${this.namespace}`)
    
  }

  updatePartner(partner: Partner): Observable<Partner> {

    return this.httpClient.put<Partner>(`${this.API_URL}/${this.namespace}/${partner.id}`, partner, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
    .pipe(
      tap(data => console.log("Partner modification: ",data))
    )
  }

  updatePartnerStatus(data: any): Observable<Partner>{
    return this.httpClient.put<Partner>(`${this.API_URL}/${this.namespace}/${data.id}/${data.status}`, data, 
    {headers: new HttpHeaders().set('content-Type', 'application/json')})
  }

}
