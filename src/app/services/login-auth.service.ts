import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
  private baseApiUrl: string = "http://localhost:5000";
  // private baseApiUrl: string = environment.baseApiUrl;
  constructor(private http : HttpClient) { }
  
  login(loginObj: any) {
    return this.http.post<any>(`${this.baseApiUrl}/Accounts/login`, loginObj);
  }

  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.clear();
  }
}
