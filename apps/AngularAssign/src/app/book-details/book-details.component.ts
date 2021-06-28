import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../Book';
import { Subscription } from 'rxjs';
import { AppFacade } from '../NgrxStoreModule/app.facade';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  id = '';
  bookDetails: Book;
  bookList: Book[];
  subscription: Subscription;
  subscriptionOne: Subscription;
  exists = false;
  booksIncart: Book[];
  constructor(
    private apiService: ApiserviceService,
    private route: ActivatedRoute,
    private router: Router,
    private appFacade: AppFacade
  ) {}
  ngOnInit(): void {
    this.subscriptionOne = this.appFacade.selectBooks().subscribe((data) => {
      this.booksIncart = data.booksInCart;
      this.bookList = data.bookList;
    });
    this.subscription = this.getParams().subscribe((params) => {
      this.id = params.id;
    });
    for (let i = 0; i < this.bookList.length; i++) {
      if (this.bookList[i].id == this.id) {
        this.bookDetails = this.bookList[i];
      }
    }
  }

  getParams(): ActivatedRoute['params'] {
    return this.route.params;
  }
  navigateToCart(id: string): void {
    this.appFacade.dispatchNavigateToCart();
    for (let i = 0; i < this.bookList.length; i++) {
      if (this.bookList[i].id == id) {
        for (let i = 0; i < this.booksIncart.length; i++) {
          if (this.booksIncart[i].id == id) {
            this.exists = true;
          }
        }
        if (!this.exists) {
          this.appFacade.dispatchAddInCart(this.bookList[i]);
          this.appFacade.dispatchNoOfBooks(this.booksIncart.length);
        }
      }
    }
  }

  navigateToBillingDetails(id: string): void {
    this.appFacade.dispatchNavigateToBillingDetails(id);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscriptionOne.unsubscribe();
  }
}
