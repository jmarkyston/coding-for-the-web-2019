import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  // We can expect to receive any type of data from this function.
  // When calling post, we pass the expected return type into the function call: post<TheReturnType>()
  post<T>(url: string, body: any): Promise<T> {
    // HttpClient.post returns an Observable, which doesn't work with async / await
    // So we'll wrap the result in our own Promise
    return new Promise((res, rej) => {
      let options = {
        // This header ensure's we'll get a JSON response
        headers: (new HttpHeaders()).append('Content-Type', 'application/json')
      };
      this.http.post<T>(url, body, options)
        .subscribe(
          (data: T) => {
            res(data);
          },
          (error: HttpErrorResponse) => {
            rej(error);
          }
        )
    });
  }
}
