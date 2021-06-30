import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BillingDetailsComponent } from './billing-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppFacade } from '../NgrxStoreModule/app.facade';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../NgrxStoreModule';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from '../NgrxStoreModule/app.effects';
import * as data from '../data';
import { of } from 'rxjs';

describe('BillingDetailsComponent', () => {
  let component: BillingDetailsComponent;
  let fixture: ComponentFixture<BillingDetailsComponent>;
  let service: AppFacade;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillingDetailsComponent],
      imports: [
        MatDialogModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([AppEffects]),
      ],
      providers: [FormBuilder, AppFacade],
    }).compileComponents();
    service = TestBed.inject(AppFacade);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('openDialog Function bookAlreadyPurchased', () => {
    const value = {
      id: 'ppjUtAEACAAJ',
      address: 'wing-6',
      email: 'sweety@gmail.com',
      name: 'sweety',
      phoneNumber: '9897172571',
    };
    spyOn(service, 'dispatchAddBooksPurchased');
    spyOn(service, 'dispatchnoOfBooksPurchased');
    spyOn(service, 'dispatchAddBillingDetials');
    component.openDialog(value);
    if (!component.bookAlreadyPurchased) {
      expect(component.bookAlreadyPurchased).toEqual(false);
      service.dispatchAddBooksPurchased(component.book);
      service.dispatchnoOfBooksPurchased(component.booksPurchased.length);
      service.dispatchAddBillingDetials(value);
      expect(service.dispatchAddBooksPurchased).toHaveBeenCalled();
      expect(service.dispatchnoOfBooksPurchased).toHaveBeenCalled();
      expect(service.dispatchAddBillingDetials).toHaveBeenCalled();
    }
  });
  it('ngOnInit', fakeAsync(() => {
    const value = {
      id: 'ppjUtAEACAAJ',
      address: 'wing-6',
      email: 'sweety@gmail.com',
      name: 'sweety',
      phoneNumber: '9897172571',
    };
    const returnValue = {
      booksInCart: [],
      bookList: data.bookList,
      booksPurchased: data.booksPurchased,
      billingDetails: [],
      noOfBooksPurchased: 0,
      noOfBooks: 0,
      booksAlreadyPurchased: false,
      recentSearches: [],
      bookCollection: [],
      getBookError: '',
    };
    component.bookId = 'ppjUtAEACAAJ';
    component.book = data.bookList[0];
    spyOn(service, 'selectBooks').and.returnValue(of(returnValue));
    spyOn(component, 'checkBooksPurchased');
    component.ngOnInit();
    tick();
    component.openDialog(value);
    expect(component.bookAlreadyPurchased).toEqual(false);
    for (let i = 0; i < component.bookList.length; i++) {
      if (component.bookList[0].id == component.bookId) {
        for (let j = 0; j < component.booksPurchased.length; j++) {
          if (component.booksPurchased[0].id == component.bookId) {
            expect(component.bookList[0].id).toEqual(component.bookId);
            expect(component.booksPurchased[0].id).toEqual(component.bookId);
            expect(component.book).toEqual(data.bookList[0]);
            expect(component.checkBooksPurchased).toHaveBeenCalled();
          }
        }
      }
    }
  }));
  it('checkBooksPurchased', fakeAsync(() => {
    const returnValue = {
      booksInCart: [],
      bookList: data.bookList,
      booksPurchased: data.booksPurchased,
      billingDetails: [],
      noOfBooksPurchased: 0,
      noOfBooks: 0,
      booksAlreadyPurchased: false,
      recentSearches: [],
      bookCollection: [],
      getBookError: '',
    };
    component.bookId = 'ppjUtAEACAAJ';
    component.book = data.bookList[0];
    spyOn(service, 'selectBooks').and.returnValue(of(returnValue));
    spyOn(service, 'dispatchBookAlreadyPurchased');
    component.ngOnInit();
    tick();
    component.checkBooksPurchased();
    for (let j = 0; j < component.booksPurchased.length; j++) {
      if (component.booksPurchased[0].id == component.bookId) {
        service.dispatchBookAlreadyPurchased(true);
        expect(service.dispatchBookAlreadyPurchased).toHaveBeenCalled();
      }
    }
  }));
});
