import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = 'https://jsonplaceholder.typicode.com/users';
  headers: HttpHeaders = null;

  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });    
  }

  post(user: User) : Promise<User> {    
    return this.http.post<User>(this.apiUrl, user, { headers: this.headers }).toPromise<User>();
  }

}
