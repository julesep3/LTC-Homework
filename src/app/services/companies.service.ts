import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  baseApiUrl = environment.baseApiUrl;
  
  constructor(private http: HttpClient) { }

  getAllCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.baseApiUrl + '/companies');
  }

  addCompany(userObj: any) {
    return this.http.post<any>(`${this.baseApiUrl}/companies`, userObj);
  }
}
