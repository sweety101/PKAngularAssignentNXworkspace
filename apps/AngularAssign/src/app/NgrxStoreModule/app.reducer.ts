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
  bookCollection: Book[];
  getBookError: string;
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
  bookCollection: [],
  getBookError: '',
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
      };
    }
    case appActions.DELETE_INCART: {
      return {
        ...state,
        booksInCart: state.booksInCart.filter((book) => {
          return book.id !== action.payload;
        }),
      };
    }
    case appActions.GET_BOOKS: {
      return {
        ...state,
        recentSearches: [...state.recentSearches, action.payload.searchString],
      };
    }
    case appActions.GET_BOOKS_FAIL: {
      return {
        ...state,
        getBookError: action.payload,
      };
    }
    case appActions.GET_BOOK_LIST: {
      return {
        ...state,
        bookList: action.payload,
      };
    }
    case appActions.ADD_BOOKS_PURCHASED: {
      return {
        ...state,
        booksPurchased: [...state.booksPurchased, action.payload],
      };
    }
    case appActions.ADD_BILLING_DETAILS: {
      return {
        ...state,
        billingDetails: [...state.billingDetails, action.payload],
      };
    }
    case appActions.NO_OF_BOOKS: {
      return {
        ...state,
        noOfBooks: action.payload,
      };
    }
    case appActions.NO_OF_BOOKSPURCHASED: {
      return {
        ...state,
        noOfBooksPurchased: action.payload,
      };
    }
    case appActions.BOOK_ALREADY_PURCHASED: {
      return {
        ...state,
        booksAlreadyPurchased: action.payload,
      };
    }
    case appActions.ADD_TO_COLLECTIONS: {
      return {
        ...state,
        bookCollection: [...state.bookCollection, action.payload],
      };
    }
    default:
      return state;
  }
}
