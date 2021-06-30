import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers } from './NgrxStoreModule';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './NgrxStoreModule/app.effects';
import { AppFacade } from './NgrxStoreModule/app.facade';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let service: AppFacade;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatBadgeModule,
        BrowserAnimationsModule,
        MatListModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([AppEffects]),
      ],
      declarations: [AppComponent],
      providers: [AppFacade],
    }).compileComponents();
    service = TestBed.inject(AppFacade);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngularAssign'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularAssign');
  });
  it(`ngOnInit`, fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const returnValue = {
      booksInCart: [],
      bookList: [],
      booksPurchased: [],
      billingDetails: [],
      noOfBooksPurchased: 1,
      noOfBooks: 1,
      booksAlreadyPurchased: false,
      recentSearches: [],
      bookCollection: [],
      getBookError: '',
    };
    spyOn(service, 'selectBooks').and.returnValue(of(returnValue));
    app.ngOnInit();
    tick();
    expect(app.cartCount).toEqual(1);
    expect(app.collectionCount).toEqual(1);
  }));
});
