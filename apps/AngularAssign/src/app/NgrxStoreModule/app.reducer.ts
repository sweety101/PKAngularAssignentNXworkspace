import { BillingDetails } from '../BillingDetails';
import { Book } from '../Book';
import * as appActions from './app.action';

export interface appState {
  booksInCart: Book[];
  bookList: Book[];
  booksPurchased: Book[];
  billingDetails: BillingDetails[];
  noOfBooksPurchased: number;
  noOfBooks: number;
  booksAlreadyPurchased: boolean;
  recentSearches: string[];
}
export const initialState: appState = {
  booksInCart: [],
  bookList: [],
  booksPurchased: [],
  billingDetails: [],
  noOfBooksPurchased: 0,
  noOfBooks: 0,
  booksAlreadyPurchased: false,
  recentSearches: [],
};
export function appReducer(
  state: appState = initialState,
  action: appActions.Actions
): appState {
  switch (action.type) {
    case appActions.ADD_INCART: {
      return {
        ...state,
        booksInCart: [...state.booksInCart, action.payload],
        bookList: [...state.bookList],
        booksPurchased: [...state.booksPurchased],
        billingDetails: [...state.billingDetails],
        noOfBooksPurchased: state.noOfBooksPurchased,
        noOfBooks: state.noOfBooks,
        booksAlreadyPurchased: state.booksAlreadyPurchased,
        recentSearches: state.recentSearches,
      };
    }
    case appActions.DELETE_INCART: {
      return {
        ...state,
        booksInCart: state.booksInCart.filter((book) => {
          return book.id !== action.payload;
        }),
        bookList: [...state.bookList],
        booksPurchased: [...state.booksPurchased],
        billingDetails: [...state.billingDetails],
        noOfBooksPurchased: state.noOfBooksPurchased,
        noOfBooks: state.noOfBooks,
        booksAlreadyPurchased: state.booksAlreadyPurchased,
        recentSearches: state.recentSearches,
      };
    }
    case appActions.GET_BOOKS: {
      return {
        ...state,
        booksInCart: [...state.booksInCart],
        bookList: [...state.bookList],
        booksPurchased: [...state.booksPurchased],
        billingDetails: [...state.billingDetails],
        noOfBooksPurchased: state.noOfBooksPurchased,
        noOfBooks: state.noOfBooks,
        booksAlreadyPurchased: state.booksAlreadyPurchased,
        recentSearches: [...state.recentSearches, action.payload.searchString],
      };
    }
    case appActions.GET_BOOK_LIST: {
      return {
        ...state,
        booksInCart: [...state.booksInCart],
        bookList: action.payload,
        booksPurchased: [...state.booksPurchased],
        billingDetails: [...state.billingDetails],
        noOfBooksPurchased: state.noOfBooksPurchased,
        noOfBooks: state.noOfBooks,
        booksAlreadyPurchased: state.booksAlreadyPurchased,
        recentSearches: state.recentSearches,
      };
    }
    case appActions.ADD_BOOKS_PURCHASED: {
      return {
        ...state,
        booksInCart: [...state.booksInCart],
        bookList: [...state.bookList],
        booksPurchased: [...state.booksPurchased, action.payload],
        billingDetails: [...state.billingDetails],
        noOfBooksPurchased: state.noOfBooksPurchased,
        noOfBooks: state.noOfBooks,
        booksAlreadyPurchased: state.booksAlreadyPurchased,
        recentSearches: state.recentSearches,
      };
    }
    case appActions.ADD_BILLING_DETAILS: {
      return {
        ...state,
        booksInCart: [...state.booksInCart],
        bookList: [...state.bookList],
        booksPurchased: [...state.booksPurchased],
        billingDetails: [...state.billingDetails, action.payload],
        noOfBooksPurchased: state.noOfBooksPurchased,
        noOfBooks: state.noOfBooks,
        booksAlreadyPurchased: state.booksAlreadyPurchased,
        recentSearches: state.recentSearches,
      };
    }
    case appActions.NO_OF_BOOKS: {
      return {
        ...state,
        booksInCart: [...state.booksInCart],
        bookList: [...state.bookList],
        booksPurchased: [...state.booksPurchased],
        billingDetails: [...state.billingDetails],
        noOfBooksPurchased: state.noOfBooksPurchased,
        noOfBooks: action.payload,
        booksAlreadyPurchased: state.booksAlreadyPurchased,
        recentSearches: state.recentSearches,
      };
    }
    case appActions.NO_OF_BOOKSPURCHASED: {
      return {
        ...state,
        booksInCart: [...state.booksInCart],
        bookList: [...state.bookList],
        booksPurchased: [...state.booksPurchased],
        billingDetails: [...state.billingDetails],
        noOfBooksPurchased: action.payload,
        noOfBooks: state.noOfBooks,
        booksAlreadyPurchased: state.booksAlreadyPurchased,
        recentSearches: state.recentSearches,
      };
    }
    case appActions.BOOK_ALREADY_PURCHASED: {
      return {
        ...state,
        booksInCart: [...state.booksInCart],
        bookList: [...state.bookList],
        booksPurchased: [...state.booksPurchased],
        billingDetails: [...state.billingDetails],
        noOfBooksPurchased: state.noOfBooksPurchased,
        noOfBooks: state.noOfBooks,
        booksAlreadyPurchased: action.payload,
        recentSearches: state.recentSearches,
      };
    }
    default:
      return state;
  }
}
