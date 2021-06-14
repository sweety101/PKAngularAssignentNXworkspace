import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './Book';
import { BillingDetails } from './BillingDetails';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  key : string = "AIzaSyB9FNNtrceZnozsFIbYy-zZGohU9XaJG0c";
  booksList :Book[] = [];
  booksInCart : any = [];
  noOfBooks : number = 0;
  booksPurchased : Book[] = [];
  noOfBooksPurchased : number = 0;
  bookAlreadyPurchased : boolean = false;
  billingDetails : BillingDetails[] = [];
  recentSearches : any = [];
  searchString : string = '';
  constructor(private httpClient: HttpClient) { }

  search(searchQuery: string): Observable<Book[]> {
    this.recentSearches.push(searchQuery);
    console.log('recentSearches', this.recentSearches);
    return this.httpClient
      .get<{ items: Book[] }>(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=4&keyes&key=${this.key}`)
      .pipe(map(books => books.items || []));
  }
  navigatingFromCart(id : string){
    for(let i = 0; i < this.booksInCart.length; i++) {
      if(this.booksInCart[i].id == id){
        this.booksInCart.splice(i, 1); 
        console.log(this.booksInCart);
      }
  }
  this.noOfBooks = this.booksInCart.length;
  }
}
