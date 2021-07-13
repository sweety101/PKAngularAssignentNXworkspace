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
    const searchParams = {
      params: {
        searchString: searchString,
      },
    };
    return this.httpClient.get<Book[]>(
      `http://localhost:3000/getBooks`,
      searchParams
    );
  }
}
