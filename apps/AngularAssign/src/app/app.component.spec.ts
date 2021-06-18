import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { ApiserviceService } from './apiservice.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let service: ApiserviceService;
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
      ],
      declarations: [AppComponent],
      providers: [ApiserviceService],
    }).compileComponents();
    service = TestBed.inject(ApiserviceService);
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
  it(`should have books property as false`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.books).toEqual(false);
  });
  it(`ngOnInit`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    expect(app.cartCount).toEqual(service.noOfBooks);
    expect(app.collectionCount).toEqual(service.noOfBooksPurchased);
  });
  it(`ngDoCheck`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngDoCheck();
    expect(app.cartCount).toEqual(service.noOfBooks);
    expect(app.collectionCount).toEqual(service.noOfBooksPurchased);
  });
});
