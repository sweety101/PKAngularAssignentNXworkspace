import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './Book';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  key = 'AIzaSyDQO3ciIFhJaxNrRJR93nl9YpjxpTG_YLM';
  constructor(private httpClient: HttpClient) {}
  get(searchString: string, key: string): Observable<Book[]> {
    return this.httpClient
      .get<{ items: Book[] }>(
        `https://www.googleapis.com/books/v1/volumes?q=${searchString}&maxResults=4&keyes&key=${key}`
      )
      .pipe(map((books) => books.items));
  }
}
