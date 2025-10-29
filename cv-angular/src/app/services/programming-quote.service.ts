import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgrammingQuoteService {
  private apiUrl = 'https://programming-quotes-api.vercel.app/api/quotes/random';

  constructor(private http: HttpClient) {}

  getQuote(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}