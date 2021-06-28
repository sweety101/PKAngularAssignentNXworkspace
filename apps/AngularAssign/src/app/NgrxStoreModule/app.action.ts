import { Action } from '@ngrx/store';
import { BillingDetails } from '../BillingDetails';
import { Book } from '../Book';

export const ADD_INCART = 'ADD_INCART';
export const DELETE_INCART = 'DELETE_INCART';
export const GET_BOOKS = 'GET_BOOKS';
export const GET_BOOK_LIST = 'GET_BOOK_LIST';
export const ADD_BOOKS_PURCHASED = 'ADD_BOOKS_PURCHASED';
export const ADD_BILLING_DETAILS = 'ADD_BILLING_DETAILS';
export const NO_OF_BOOKS = 'NO_OF_BOOKS';
export const NO_OF_BOOKSPURCHASED = 'NO_OF_BOOKSPURCHASED';
export const BOOK_ALREADY_PURCHASED = 'BOOK_ALREADY_PURCHASED';
export const NAVIGATE_TO_BILLING_DETAILS = 'NAVIGATE_TO_BILLING_DETAILS';
export const NAVIGATE_TO_CART = 'NAVIGATE_TO_CART';
export const NAVIGATE_TO_BOOK_DETAILS = 'NAVIGATE_TO_BOOK_DETAILS';

export class AddIncart implements Action {
  readonly type = ADD_INCART;
  constructor(public payload: Book) {}
}

export class DeleteIncart implements Action {
  readonly type = DELETE_INCART;
  constructor(public payload: string) {}
}

export class GetBooks implements Action {
  readonly type = GET_BOOKS;
  constructor(public payload: { searchString: string; key: string }) {}
}
export class GetBookList implements Action {
  readonly type = GET_BOOK_LIST;
  constructor(public payload: Book[]) {}
}
export class AddBooksPurchased implements Action {
  readonly type = ADD_BOOKS_PURCHASED;
  constructor(public payload: Book) {}
}
export class AddBillingDetials implements Action {
  readonly type = ADD_BILLING_DETAILS;
  constructor(public payload: BillingDetails) {}
}
export class noOfBooks implements Action {
  readonly type = NO_OF_BOOKS;
  constructor(public payload: number) {}
}
export class noOfBooksPurchased implements Action {
  readonly type = NO_OF_BOOKSPURCHASED;
  constructor(public payload: number) {}
}
export class BookAlreadyPurchased implements Action {
  readonly type = BOOK_ALREADY_PURCHASED;
  constructor(public payload: boolean) {}
}
export class NavigateToBillingDetails implements Action {
  readonly type = NAVIGATE_TO_BILLING_DETAILS;
  constructor(public payload: string) {}
}
export class NavigateToCart implements Action {
  readonly type = NAVIGATE_TO_CART;
}
export class NavigateToBookDetails implements Action {
  readonly type = NAVIGATE_TO_BOOK_DETAILS;
  constructor(public payload: string) {}
}
export type Actions =
  | AddIncart
  | DeleteIncart
  | GetBooks
  | GetBookList
  | AddBooksPurchased
  | AddBillingDetials
  | noOfBooks
  | noOfBooksPurchased
  | BookAlreadyPurchased
  | NavigateToBillingDetails
  | NavigateToCart
  | NavigateToBookDetails;
