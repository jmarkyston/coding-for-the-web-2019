import { IStorageProvider } from './i.storage-provider';

// base class for browser storage manipulation
// localStorage and sessionStorage are both manipulated in the same way
// a base class consolidates shared logic to minimize duplication
export class BrowserStorageProvider<T> implements IStorageProvider<T> {
  private key: string;
  private store: Storage;

  constructor(key: string, store: Storage) {
    this.key = key;
    this.store = store;
  }

  public get(): T {
    return JSON.parse(this.store.getItem(this.key));
  }

  public set(value: T): void {
    this.store.setItem(this.key, JSON.stringify(value));
  }

  public remove(): void {
    this.store.removeItem(this.key);
  }
}