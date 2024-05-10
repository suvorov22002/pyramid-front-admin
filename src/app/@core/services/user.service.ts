import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Contacts, RecentUsers, User, UserData } from '../data/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends UserData{
  
  private namespace: String = "api/v1/users"
  private API_URL: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
    super();
  }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.API_URL}/${this.namespace}`, user, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.API_URL}/${this.namespace}`)
  }

  updateUserStatus(data: any): Observable<User> {
    return this.httpClient.put<User>(`${this.API_URL}/${this.namespace}/${data.id}/${data.status}`, data, 
    {headers: new HttpHeaders().set('content-Type', 'application/json')})
  }
  getContacts(): Observable<Contacts[]> {
    throw new Error('Method not implemented.');
  }
  getRecentUsers(): Observable<RecentUsers[]> {
    throw new Error('Method not implemented.');
  }

}
