import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string;
  email: string;
  password: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  login() {
    if (!this.email || !this.email.includes('@') || !this.email.includes('.')) {
      this.error = 'Email invalid.';
    }
    else if (!this.password) {
      this.error = 'Password invalid.';
    }
    else {
      this.error = null;
    }
  }

  goToSignUp() {
    this.router.navigate(['/sign-up']);
  }
}
