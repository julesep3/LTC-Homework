import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginAuthService } from '../services/login-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: LoginAuthService, private router: Router) {}
  canActivate(): boolean {
    if(this.auth.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
      alert("Page not currently accessible.\nPlease log in first.");
      return false;
    }
    // return true;
  }
  
}
