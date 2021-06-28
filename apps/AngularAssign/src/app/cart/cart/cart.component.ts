import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../../apiservice.service';
import { Observable, Subscription } from 'rxjs';
import { Book } from '../../Book';
import { AppFacade } from '../../NgrxStoreModule/app.facade';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartId = '';
  books: Observable<{ booksInCart: Book[] }>;
  exists = false;
  subscription: Subscription;
  booksIncart: Book[];
  constructor(
    private apiService: ApiserviceService,
    private router: Router,
    private appFacade: AppFacade
  ) {}

  ngOnInit(): void {
    this.appFacade.selectBooks().subscribe((data) => {
      this.booksIncart = data.booksInCart;
    });
  }
  trackByTitle(index: number, currentItem: Book): string {
    return currentItem.volumeInfo.title;
  }
  navigateToBillingDetails(id: string): void {
    this.appFacade.dispatchDeleteIncart(id);
    this.appFacade.dispatchNoOfBooks(this.booksIncart.length);
    this.appFacade.dispatchNavigateToBillingDetails(id);
  }
  deleteFromCart(id: string): void {
    this.appFacade.dispatchDeleteIncart(id);
    this.appFacade.dispatchNoOfBooks(this.booksIncart.length);
  }
}
