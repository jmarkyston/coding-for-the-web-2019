import { BrowserStorageProvider } from './browser-storage-provider';

export class SessionStorageProvider<T> extends BrowserStorageProvider<T> {
  constructor(key: string) {
    super(key, sessionStorage);
  }
}