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
  picture?: string;
  partnerCode: string;
}

export interface Contacts {
  user: User;
  type: string;
}

export interface RecentUsers extends Contacts {
  time: number;
}

export abstract class UserData {
  abstract createUser(data: User): Observable<User>;
  abstract getUsers(): Observable<User[]>;
  abstract getContacts(): Observable<Contacts[]>;
  abstract getRecentUsers(): Observable<RecentUsers[]>;
  abstract updateUserStatus(data: any): Observable<User>;
}
