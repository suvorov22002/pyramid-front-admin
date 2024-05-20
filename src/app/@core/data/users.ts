import { Observable } from 'rxjs';

export interface User {
  id?: number;
  name: string;
  login: string;
  password: string;
  phoneNumber: string;
  email?: string;
  enabled?: boolean;
  role: string;
  picture?: 'assets/images/nick.png';
  partnerCode: string;
}


export abstract class UserData {
  abstract createUser(data: User): Observable<User>;
  abstract getUsers(): Observable<User[]>;
  abstract updateUserStatus(data: any): Observable<User>;
}
