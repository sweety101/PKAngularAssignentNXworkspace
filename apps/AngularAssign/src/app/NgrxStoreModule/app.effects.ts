import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as appActions from './app.action';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AppEffects {
  @Effect()
  getBooks = this.actions$.pipe(
    ofType(appActions.GET_BOOKS),
    switchMap((data: appActions.GetBooks) => {
      return this.apiService
        .get(data.payload.searchString, data.payload.key)
        .pipe(
          map((data) => {
            return new appActions.GetBookList(data);
          }),
          catchError((errorRes: HttpErrorResponse) => {
            return of(
              new appActions.GetBooksFail(errorRes.error.error.message)
            );
          })
        );
    })
  );

  @Effect({ dispatch: false })
  navigateToBillingDetails = this.actions$.pipe(
    ofType(appActions.NAVIGATE_TO_BILLING_DETAILS),
    switchMap((data: appActions.NavigateToBillingDetails) => {
      return this.router.navigate(['/billingDetails', data.payload]);
    })
  );

  @Effect({ dispatch: false })
  navigateToBookDetails = this.actions$.pipe(
    ofType(appActions.NAVIGATE_TO_BOOK_DETAILS),
    switchMap((data: appActions.NavigateToBookDetails) => {
      return this.router.navigate(['/bookDetails', data.payload]);
    })
  );

  @Effect({ dispatch: false })
  navigateToCart = this.actions$.pipe(
    ofType(appActions.NAVIGATE_TO_CART),
    switchMap(() => {
      return this.router.navigate(['/cart']);
    })
  );
  constructor(
    private actions$: Actions,
    private router: Router,
    private apiService: ApiserviceService
  ) {}
}
