import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import * as data from '../data';

import * as Effects from './app.effects';
import * as Actions from './app.action';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

describe('Store > Data > DataEffect', () => {
  let actions$: Observable<Action>;
  let effects: Effects.AppEffects;
  let service: ApiserviceService;

  const routerSpy = { navigate: jasmine.createSpy('navigate') };
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, HttpClientModule],
      providers: [
        Effects.AppEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        {
          provide: Router,
          useValue: routerSpy,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '' }),
          },
        },
      ],
    });
    effects = TestBed.inject<Effects.AppEffects>(Effects.AppEffects);
    service = TestBed.inject(ApiserviceService);
  });

  it('SHOULD dispatch GetBooks action WHEN GetBookList action is dispatched', () => {
    spyOn(service, 'get').and.returnValue(of(data.bookList));

    actions$ = of({
      type: Actions.GET_BOOKS,
      payload: { searchString: 'React', key: 'id' },
    });
    effects.getBooks.subscribe((action) => {
      expect(action.type).toBe(Actions.GET_BOOK_LIST);
      expect(action.payload).toEqual(data.bookList);
    });
  });
  it('SHOULD dispatch NAVIGATE_TO_BOOK_DETAILS action', () => {
    actions$ = of({ type: Actions.NAVIGATE_TO_BOOK_DETAILS, payload: 'id' });
    effects.navigateToBillingDetails.subscribe(() => {
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/bookDetails', 'id']);
    });
  });
});
