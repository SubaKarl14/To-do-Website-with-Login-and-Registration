import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  login() {
    localStorage.setItem('isLoggedIn', 'true');
  }
  logout() {
    localStorage.removeItem('isLoggedIn');
  }
}
