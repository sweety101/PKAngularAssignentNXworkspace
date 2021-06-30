import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BookDetailsComponent } from './book-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AppFacade } from '../NgrxStoreModule/app.facade';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../NgrxStoreModule';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from '../NgrxStoreModule/app.effects';
import * as data from '../data';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let service: AppFacade;
  const routerSpy = { navigate: jasmine.createSpy('navigate') };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookDetailsComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatCardModule,
        MatButtonModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([AppEffects]),
      ],
      providers: [
        AppFacade,
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
    }).compileComponents();
    service = TestBed.inject(AppFacade);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('ngOnInit', fakeAsync(() => {
    const returnValue = {
      booksInCart: data.booksPurchased,
      bookList: data.bookList,
      booksPurchased: [],
      billingDetails: [],
      noOfBooksPurchased: 0,
      noOfBooks: 0,
      booksAlreadyPurchased: false,
      recentSearches: [],
      bookCollection: [],
      getBookError: '',
    };
    spyOn(service, 'selectBooks').and.returnValue(of(returnValue));
    component.ngOnInit();
    tick();
    expect(component.booksIncart).toEqual(data.booksPurchased);
    expect(component.bookList).toEqual(data.bookList);
    component.id = 'ppjUtAEACAAJ';
    component.bookDetails = data.bookList[0];
    for (let i = 0; i < component.bookList.length; i++) {
      if (component.bookList[i].id == component.id) {
        component.bookDetails = component.bookList[i];
        expect(component.bookDetails).toEqual(component.bookList[i]);
      }
    }
    expect(component.bookList[0].id).toEqual(component.id);
  }));
  it('should navigate to BillingDetails page', () => {
    spyOn(service, 'dispatchNavigateToBillingDetails');
    component.navigateToBillingDetails('ppjUtAEACAAJ');
    expect(service.dispatchNavigateToBillingDetails).toHaveBeenCalled();
  });
  it('should navigate to cart ', fakeAsync(() => {
    const returnValue = {
      booksInCart: data.booksPurchased,
      bookList: data.bookList,
      booksPurchased: [],
      billingDetails: [],
      noOfBooksPurchased: 0,
      noOfBooks: 0,
      booksAlreadyPurchased: false,
      recentSearches: [],
      bookCollection: [],
      getBookError: '',
    };
    component.id = 'ppjUtAEACAAJ';
    spyOn(service, 'selectBooks').and.returnValue(of(returnValue));
    spyOn(service, 'dispatchNavigateToCart');
    component.ngOnInit();
    tick();
    component.navigateToCart('ppjUtAEACAAJ');
    expect(service.dispatchNavigateToCart).toHaveBeenCalled();
    expect(component.bookList[0].id).toEqual('ppjUtAEACAAJ');
    expect(component.booksIncart[0].id).toEqual('ppjUtAEACAAJ');
    expect(component.exists).toBe(true);
  }));
  it('should not navigate to cart ', fakeAsync(() => {
    const returnValue = {
      booksInCart: [],
      bookList: data.bookList,
      booksPurchased: [],
      billingDetails: [],
      noOfBooksPurchased: 0,
      noOfBooks: 0,
      booksAlreadyPurchased: false,
      recentSearches: [],
      bookCollection: [],
      getBookError: '',
    };
    component.id = 'ppjUtAEACAAJ';
    component.exists = false;
    spyOn(service, 'selectBooks').and.returnValue(of(returnValue));
    spyOn(service, 'dispatchNavigateToCart');
    spyOn(service, 'dispatchAddInCart');
    spyOn(service, 'dispatchNoOfBooks');
    component.ngOnInit();
    tick();
    component.navigateToCart('ppjUtAEACAAJ');
    expect(component.exists).toBe(false);
    expect(service.dispatchNavigateToCart).toHaveBeenCalled();
    expect(service.dispatchAddInCart).toHaveBeenCalled();
    expect(service.dispatchNoOfBooks).toHaveBeenCalled();
  }));
});
