import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../../apiservice.service';
import { Subscription } from 'rxjs';
import { Book } from '../../Book';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartId = '';
  books: Book[] = [];
  exists = false;
  subscription: Subscription;
  constructor(private apiService: ApiserviceService, private router: Router) {}

  ngOnInit(): void {
    this.books = this.apiService.booksInCart;
  }
  trackByTitle(index: number, currentItem: Book): string {
    return currentItem.volumeInfo.title;
  }
  navigateToBillingDetails(id: string): void {
    this.apiService.navigatingFromCart(id);
    this.router.navigate(['/billingDetails', id]);
  }
  deleteFromCart(id: string): void {
    for (let i = 0; i < this.apiService.booksInCart.length; i++) {
      if (this.apiService.booksInCart[i].id == id) {
        this.apiService.booksInCart.splice(i, 1);
      }
    }
    this.apiService.noOfBooks = this.apiService.booksInCart.length;
  }
}
