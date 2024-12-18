import { Injectable } from '@angular/core';
import {  CanActivate } from '@angular/router';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = localStorage.getItem('isLoggedIn'); 

    // If user is logged in, allow access
    if (isLoggedIn === 'true') {
      return true;
    } else {
      alert('You must log in first to access this page.');
      this.router.navigate(['/login']); 
      return false;
    }
  }
}