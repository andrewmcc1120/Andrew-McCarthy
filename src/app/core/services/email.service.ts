import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient: HttpClient) { }

  postEmail(postEmailRequest: any): Observable<any> {
    const emailHostEndpoint = 'https://mailthis.to/amcdev';
    return this.httpClient.post(emailHostEndpoint, postEmailRequest, { responseType: 'text' }).pipe(
      map(
        (response) => {
          if (response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    );
  }
}
