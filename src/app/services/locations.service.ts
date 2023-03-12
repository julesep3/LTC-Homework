import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Location } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  baseApiUrl = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllLocations(): Observable <Location[]> {
    return this.http.get<Location[]>(this.baseApiUrl + '/locations');
  }
}
