import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { AccountResponse } from '../models/account-response';
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

  // The login component only cares if the login function returns an error or not
  // Our return type will be the error string. If no error, return null.
  async login(email: string, password: string): Promise<string> {
    let url = 'https://72jjb480ol.execute-api.us-east-1.amazonaws.com/dev/login';
    let request = new AccountRequest(email, password);
    let response = await this.http.post<AccountResponse>(url, request);
    if (response.error) {
      return response.error;
    }
    else {
      this.storage.id.set(response.id);
      return null;
    }
  }
}
