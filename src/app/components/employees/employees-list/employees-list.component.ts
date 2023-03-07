import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  // employees: Employee[] = [
  //   {
  //     id: 'A1',
  //     name: 'John Smith',
  //     email: 'JSmith@email.com',
  //     phone: 4053771111,
  //     salary: 50000,
  //     department: 'Accounting'
  //   },
  //   {
  //     id: 'A2',
  //     name: 'Laura Jones',
  //     email: 'LJones@email.com',
  //     phone: 4053771112,
  //     salary: 55000,
  //     department: 'Sales'
  //   },
  //   {
  //     id: 'A3',
  //     name: 'Victor Sanchez',
  //     email: 'VSanchez@email.com',
  //     phone: 4053771113,
  //     salary: 45000,
  //     department: 'Distribution'
  //   },
  //   {
  //     id: 'A4',
  //     name: 'Lisa Ying',
  //     email: 'LYing@email.com',
  //     phone: 4053771113,
  //     salary: 53000,
  //     department: 'Human Resources'
  //   }
  // ];

  employees?: Employee[] = [];

  constructor() { // private employeesService: EmployeesService
  }
  ngOnInit(): void {
  //   this.employeesService.getAllEmployees().subscribe({
  //     next: (employees) => {
  //       console.log(employees);
  //     },
  //     error: (response) => {
  //       console.log(response);
  //     }
  // });
  }
}
