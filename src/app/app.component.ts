import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAuthService } from './services/login-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: LoginAuthService, private router: Router) { }
  loggedIn = !this.auth.isLoggedIn();
  title = 'LTSHomework';

  logout() {
    this.router.navigate(['']).then(()=> location.reload());
    this.auth.logout();
  }
}
