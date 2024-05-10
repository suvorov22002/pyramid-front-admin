import { Injectable } from '@angular/core';
import { Parameter, ParameterData, ParameterResponse } from '../data/parameter';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParameterService extends ParameterData{
  
  private namespace: String = "api/v1/parameters"
  private API_URL: string = environment.apiUrl;
  
 
  constructor(private httpClient: HttpClient) {
    super();
  }

  updateParameter(id: number, parameter: Parameter): Observable<ParameterResponse> {
    return this.httpClient.put<ParameterResponse>(`${this.API_URL}/${this.namespace}/${id}`, parameter, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  listAllParameters(): Observable<ParameterResponse> {
    throw new Error('Method not implemented.');
  }

  selectPartner(id: number): Observable<Parameter> {
    return this.httpClient.get<Parameter>(`${this.API_URL}/${this.namespace}/${id}`);
  }

}
