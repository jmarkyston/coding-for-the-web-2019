// interface = contract for all implementing classes
// all implementing classes must include a version of the interface's properties and functions
// the interface doesn't define actual logic, just structural guidelines
export interface IStorageProvider<T> {
  get(): T;
  set(value: T): void;
  remove(): void;
}