import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient: HttpClient) { }

  postEmail(postEmailRequest: any): Observable<any> {
    const emailHostEndpoint = 'https://mailthis.to/amcdev';
    return this.httpClient.post(emailHostEndpoint, postEmailRequest).pipe(
      success => {
        return success;
      },
      error => {
        console.log(error);
        return error;
      }
    );
  }
}
