import { Injectable } from '@angular/core';
import { IStorageProvider } from '../models/storage/i.storage-provider';
import { SessionStorageProvider } from '../models/storage/session-storage-provider';
import { SearchResult } from '../models/search-result';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  account: IStorageProvider<Account> = new SessionStorageProvider<Account>('account');
  searchResult: IStorageProvider<SearchResult> = new SessionStorageProvider<SearchResult>('search-result');

  constructor() { }
}
