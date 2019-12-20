import { BrowserStorageProvider } from './browser-storage-provider';

export class LocalStorageProvider<T> extends BrowserStorageProvider<T> {
  constructor(key: string) {
    super(key, localStorage);
  }
}