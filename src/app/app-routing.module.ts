import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StartComponent } from './components/start/start.component';
import { AuthGuard } from './guards/auth.guard';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LocationsComponent } from './components/locations/locations.component';

const routes: Routes = [
  // path: '' is root 
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'employees',
    component: EmployeesListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mainPage',
    component: MainPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'companies',
    component: CompaniesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'locations',
    component: LocationsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
