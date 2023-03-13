import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { CompaniesService } from 'src/app/services/companies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies?: Company[] = [];
  baseApiUrl = environment.baseApiUrl;

  constructor(private companiesService: CompaniesService) {}

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
  }
}
