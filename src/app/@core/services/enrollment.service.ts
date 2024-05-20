import { Injectable } from '@angular/core';
import { Enrollment, EnrollmentData, EnrollmentResponse } from '../data/enrollment';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService extends EnrollmentData{
  
  private namespace: String = "api/v1/subscriptions"
  private API_URL: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
    super();
  }

  enrollGame(enroll: Enrollment): Observable<Enrollment> {
    return this.httpClient.post<Enrollment>(`${this.API_URL}/${this.namespace}`, enroll, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  enrollAllGame(enrolls: Enrollment[]): Observable<Enrollment[]> {
    return this.httpClient.post<Enrollment[]>(`${this.API_URL}/${this.namespace}/all`, enrolls, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  listAllEnrolls(): Observable<Enrollment[]> {
    return this.httpClient.get<Enrollment[]>(`${this.API_URL}/${this.namespace}`);
  }

  unsubscribeEnroll(id: number): Observable<object> {
    return this.httpClient.delete<object>(`${this.API_URL}/${this.namespace}/${id}`)
  }

  updateEnroll(id: number, enroll: Enrollment): Observable<Enrollment> {
    throw new Error('Method not implemented.');
  }

  listAllPartnerEnrolls(partner: string): Observable<Enrollment[]> {
    return this.httpClient.get<Enrollment[]>(`${this.API_URL}/${this.namespace}/partner/${partner}`);
  }
}
