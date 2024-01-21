import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IAllservicesService {
  readonly apiregUrl = environment.apiUrl;
  readonly identityregUrl = environment.identityUrl;

  constructor(private http: HttpClient) { }
  apiregister(data: any): Observable<any> {
    const apiUrl = `${this.apiregUrl}/Account/companyregistration`; // Replace with your actual POST API endpoint

    // You may need to set headers based on your API requirements
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any other headers as needed
    });

    return this.http.post(apiUrl, data, { headers });
  }
  identityregister(dataa: any): Observable<any> {
    const apiidentityUrl = `${this.identityregUrl}/Account/register`; // Replace with your actual POST API endpoint

    // You may need to set headers based on your API requirements
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any other headers as needed
    });

    return this.http.post(apiidentityUrl, dataa, { headers });
  }
}
