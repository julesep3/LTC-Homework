import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
  private baseApiUrl: string = environment.baseApiUrl;
  constructor(private http : HttpClient, private router: Router) { }
  
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
    // 'location.reload()' is to refresh app bar state to toggle 'Log In'/'Log Out'
    this.router.navigate(['']).then(()=> location.reload());
    alert('You have logged out successfully.');
  }
}
