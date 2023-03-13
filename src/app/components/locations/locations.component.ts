import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/services/locations.service';
import { environment } from 'src/environments/environment';
import { Location } from 'src/app/models/location.model';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations?: Location[] = [];
  baseApiUrl = environment.baseApiUrl;

  constructor(private locationsService: LocationsService) {}

  ngOnInit(): void {
    this.locationsService.getAllLocations().subscribe({
      next: (locations) => {
        this.locations = locations;
      },
      error: (response) => {
        console.log(response);
      }
    });  
  }

}
