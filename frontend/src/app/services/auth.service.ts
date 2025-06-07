import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthPayload } from '../auth/auth-payload.interface';
import { LoginPayload } from '../auth/login-payload.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api/auth'; 

  constructor(private http: HttpClient) { }

  signup(payload: AuthPayload): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, payload);
  }

  login(payload: LoginPayload): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, payload);
  }


}
