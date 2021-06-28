import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MyCollectionsComponent } from './my-collections.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppFacade } from '../../NgrxStoreModule/app.facade';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../NgrxStoreModule';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from '../../NgrxStoreModule/app.effects';
import { of } from 'rxjs';
import * as data from '../../data';

describe('MyCollectionsComponent', () => {
  let component: MyCollectionsComponent;
  let fixture: ComponentFixture<MyCollectionsComponent>;
  let service: AppFacade;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyCollectionsComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatCardModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([AppEffects]),
      ],
      providers: [AppFacade],
    }).compileComponents();
    service = TestBed.inject(AppFacade);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('NgOninit', fakeAsync(() => {
    const returnValue = {
      booksInCart: [],
      bookList: [],
      booksPurchased: data.booksPurchased,
      billingDetails: data.billDetails,
      noOfBooksPurchased: 0,
      noOfBooks: 0,
      booksAlreadyPurchased: false,
      recentSearches: [],
    };
    spyOn(service, 'selectBooks').and.returnValue(of(returnValue));
    spyOn(service, 'dispatchNavigateToCart');
    component.ngOnInit();
    tick();
    expect(component.billingDetails[0].id).toEqual(
      component.booksPurchased[0].id
    );
    expect(component.booksPurchased[0].address).toEqual(
      component.billingDetails[0].address
    );
    expect(component.booksPurchased[0].email).toEqual(
      component.billingDetails[0].email
    );
    expect(component.booksPurchased[0].name).toEqual(
      component.billingDetails[0].name
    );
    expect(component.booksPurchased[0].phoneNumber).toEqual(
      component.billingDetails[0].phoneNumber
    );
  }));
});
