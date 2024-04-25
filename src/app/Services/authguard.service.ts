import { Injectable, importProvidersFrom } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { IAllservicesService } from 'src/app/Services/allservices.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  constructor(private authService:IAllservicesService, private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      console.log(token);
         return true;
    } else {
      // Redirect to login page if user is not authenticated
      this.router.navigate(['/login']); // Update with your login route
      return false;
    }
  }
}
