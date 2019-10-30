import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  error: string;
  email: string;
  password: string;
  repeatPassword: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  signUp() {
    if (!this.email || !this.email.includes('@') || !this.email.includes('.')) {
      this.error = 'Email invalid.';
    }
    else if (!this.password) {
      this.error = 'Password invalid.';
    }
    else if (this.password !== this.repeatPassword) {
      this.error = 'Passwords must match';
    }
    else {
      this.error = null;
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
