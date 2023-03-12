import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { Contact } from 'src/app/models/contact.model';
import { Location } from 'src/app/models/location.model';
import { CompaniesService } from 'src/app/services/companies.service';
import { ContactsService } from 'src/app/services/contacts.service';
import { LocationsService } from 'src/app/services/locations.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  companies?: Company[] = [];
  contacts?: Contact[] = [];
  locations?: Location[] = [];
  baseApiUrl = environment.baseApiUrl;

  constructor(private companiesService: CompaniesService, private contactsService: ContactsService, private locationsService: LocationsService){}

  ngOnInit(): void {
    this.companiesService.getAllCompanies().subscribe({
      next: (companies) => {
        // console.log(companies);
        this.companies = companies;
      },
      error: (response) => {
        console.log(response);
      }
    });    

    this.contactsService.getAllContacts().subscribe({
      next: (contacts) => {
        this.contacts = contacts;
      },
      error: (response) => {
        console.log(response);
      }
    })

    this.locationsService.getAllLocations().subscribe({
      next: (locations) => {
        this.locations = locations;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

}
