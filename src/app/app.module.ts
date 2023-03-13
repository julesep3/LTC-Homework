import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StartComponent } from './components/start/start.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { CompaniesComponent } from './components/companies/companies.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LocationsComponent } from './components/locations/locations.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    LoginComponent,
    SignupComponent,
    StartComponent,
    MainPageComponent,
    CompaniesComponent,
    ContactsComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
