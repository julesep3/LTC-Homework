import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { Contact } from 'src/app/models/contact.model';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  companies?: Company[] = [];
  contacts?: Contact[] = [];

  constructor(private companiesService: CompaniesService){}

  ngOnInit(): void {
    this.companiesService.getAllCompanies().subscribe({
      next: (companies) => {
        console.log(companies);
        this.companies = companies;
      },
      error: (response) => {
        console.log(response);
      }
    });

    
    
  }

}
