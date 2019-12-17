import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

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
    private router: Router,
    private account: AccountService
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
      this.account.login(this.email, this.password);
    }
  }

  goToSignUp() {
    this.router.navigate(['/sign-up']);
  }
}
