import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidatedashboard',
  templateUrl: './candidatedashboard.component.html',
  styleUrls: ['./candidatedashboard.component.css']
})
export class CandidatedashboardComponent implements OnInit {
  userEmail: string = '';
  constructor(private router: Router) { }
  ngOnInit(): void {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      this.userEmail = storedEmail;
    }
  }
  logout(): void {
    // Remove the token from localStorage (assuming it's stored as 'token')
    localStorage.removeItem('token');
    localStorage.clear();
    // Redirect the user to the login page (assuming it's named 'login')
    this.router.navigate(['/']);
  }
  
}
