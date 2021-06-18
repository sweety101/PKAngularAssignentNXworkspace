import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './Book';
import { BillingDetails } from './BillingDetails';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  key = 'AIzaSyB9FNNtrceZnozsFIbYy-zZGohU9XaJG0c';
  booksList: Book[] = [];
  booksInCart: Book[] = [];
  noOfBooks = 0;
  booksPurchased: Book[] = [];
  noOfBooksPurchased = 0;
  bookAlreadyPurchased = false;
  billingDetails: BillingDetails[] = [];
  recentSearches: string[] = [];
  searchString = 'React';
  constructor(private httpClient: HttpClient) {}

  search(): Observable<Book[]> {
    this.recentSearches.push(this.searchString);
    return this.httpClient
      .get<{ items: Book[] }>(
        `https://www.googleapis.com/books/v1/volumes?q=${this.searchString}&maxResults=4&keyes&key=${this.key}`
      )
      .pipe(map((books) => books.items));
  }
  navigatingFromCart(id: string): void {
    for (let i = 0; i < this.booksInCart.length; i++) {
      if (this.booksInCart[i].id == id) {
        this.booksInCart.splice(i, 1);
      }
    }
    this.noOfBooks = this.booksInCart.length;
  }
  bookPurchased(bool: boolean): void {
    this.bookAlreadyPurchased = bool;
  }
}
