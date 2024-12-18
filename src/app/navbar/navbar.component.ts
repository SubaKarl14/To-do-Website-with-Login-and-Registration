import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authService: AuthService, private router: Router) {}

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  // Toggle login/logout actions
  toggleLoginLogout() {
    if (this.isLoggedIn()) {
      this.authService.logout(); // Logout user
      alert('You have been logged out.');
      this.router.navigate(['/login']); 
    } else {
      this.router.navigate(['/login']); 
    }
  }
}
