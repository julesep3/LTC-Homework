import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupAuthService {
  private baseApiUrl: string = "http://localhost:5000";

  constructor(private http : HttpClient) { }

  signUp(userObj: any) {
    return this.http.post<any>(`${this.baseApiUrl}/Accounts/register`, userObj);
  }
}
