import { Component } from '@angular/core';
import { LoginAuthService } from './services/login-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: LoginAuthService) {
    console.log(this.auth.getUserName());
   }
  loggedIn = !this.auth.isLoggedIn();
  title = 'LTSHomework';
  username = this.auth.getUserName();

  logout() {
    this.auth.logout();
  }
}
