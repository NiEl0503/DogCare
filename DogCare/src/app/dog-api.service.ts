import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogApiService {

  private apiKey = 'woTTgeBgMDF4wQyMtZCyxQ==WHLAcTMJhnjDBgwh';
  private apiUrl = 'https://api.api-ninjas.com/v1/dogs';
  private readonly header: HttpHeaders = new HttpHeaders(`X-Api-Key: ${this.apiKey}` )

  constructor(private http: HttpClient) { }

  getDogBreed(name: string): Observable<any>{
  
    return this.http.get(`${this.apiUrl}?name=${name}`, {headers: this.header});
  }
  
}
