import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BillingDetails } from '../BillingDetails';
import { Book } from '../Book';
import * as appActions from './app.action';
import * as appReducer from './app.reducer';

@Injectable({
  providedIn: 'root',
})
export class AppFacade {
  constructor(private store: Store<{ Books: appReducer.appState }>) {}
  selectBooks(): Observable<appReducer.appState> {
    return this.store.select('Books');
  }
  dispatchNavigateToBookDetails(id: string): void {
    this.store.dispatch(new appActions.NavigateToBookDetails(id));
  }
  dispatchNavigateToBillingDetails(id: string): void {
    this.store.dispatch(new appActions.NavigateToBillingDetails(id));
  }
  dispatchNavigateToCart(): void {
    this.store.dispatch(new appActions.NavigateToCart());
  }
  dispatchGetBooks(value: string, key: string): void {
    this.store.dispatch(
      new appActions.GetBooks({ searchString: value, key: key })
    );
  }
  dispatchBookAlreadyPurchased(value: boolean): void {
    this.store.dispatch(new appActions.BookAlreadyPurchased(value));
  }
  dispatchAddBooksPurchased(value: Book): void {
    this.store.dispatch(new appActions.AddBooksPurchased(value));
  }
  dispatchnoOfBooksPurchased(value: number): void {
    this.store.dispatch(new appActions.noOfBooksPurchased(value));
  }
  dispatchAddBillingDetials(value: BillingDetails): void {
    this.store.dispatch(new appActions.AddBillingDetials(value));
  }
  dispatchAddInCart(value: Book): void {
    this.store.dispatch(new appActions.AddIncart(value));
  }
  dispatchNoOfBooks(value: number): void {
    this.store.dispatch(new appActions.noOfBooks(value));
  }
  dispatchDeleteIncart(value: string): void {
    this.store.dispatch(new appActions.DeleteIncart(value));
  }
}
