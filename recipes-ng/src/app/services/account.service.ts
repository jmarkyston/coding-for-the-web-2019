import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Account } from '../models/account';
import { AccountRequest } from '../models/account-request';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpService,
    private storage: StorageService
  ) { }

  private composeUrl(path: string): string {
    return `https://72jjb480ol.execute-api.us-east-1.amazonaws.com/dev/${path}`;
  }

  // The login component only cares if the login function returns an error or not
  // Our return type will be the error string. If no error, return null.
  async login(email: string, password: string): Promise<string> {
    let url = this.composeUrl('login');
    let request = new AccountRequest(email, password);
    let account = await this.http.post<Account>(url, request);
    if (account['error']) {
      return account['error'];
    }
    else {
      this.storage.account.set(account);
      return null;
    }
  }
}
