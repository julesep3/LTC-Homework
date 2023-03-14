import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  addCompaniesForm!: FormGroup;

  constructor(private fb: FormBuilder, private companiesService: CompaniesService, private router: Router) {}

  ngOnInit(): void {
    this.addCompaniesForm = this.fb.group({
      name: '',
      active: true
    })

    this.companiesService.getAllCompanies().subscribe({
      next: (companies) => {
        this.companies = companies;
      },
      error: (response) => {
        console.log(response);
      }
    }); 
  }

  onAddCompany() {
    // console.log(this.addCompaniesForm.value);
    this.companiesService.addCompany(this.addCompaniesForm.value).subscribe({
      next: (res) => {
        alert(`Company has been added.`);
        this.addCompaniesForm.reset();
        location.reload();
      }
    });
  }
}
