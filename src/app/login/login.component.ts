import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  signupUsers: any[] = []

  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  };

  loginObj: any = {
    userName: '',
    password: ''
  };

  constructor(private router: Router) {}


  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if(localData != null){
      this.signupUsers = JSON.parse(localData);
    } 
  }

    
  onSignup(){
    this.signupUsers. push(this.signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',
      email: '',
      password: ''
    };
  }
  onLogin() {
    const isUserExist = this.signupUsers.find(
      m => m.email === this.loginObj.email && m.password === this.loginObj.password
    );
  
    if (isUserExist != undefined) {
      alert('Login Successfully');
  
      localStorage.setItem('isLoggedIn', 'true'); // mags-set sya ng login status
      this.router.navigate(['/to-do']); 
    } else {
      alert('Invalid Credentials');
    }
  }

}
