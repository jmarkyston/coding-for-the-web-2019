import { Injectable } from '@angular/core';
import { IStorageProvider } from '../models/storage/i.storage-provider';
import { SessionStorageProvider } from '../models/storage/session-storage-provider';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  id: IStorageProvider<string> = new SessionStorageProvider<string>('id');

  constructor() { }
}
