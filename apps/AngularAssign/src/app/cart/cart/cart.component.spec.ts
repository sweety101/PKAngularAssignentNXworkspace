import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CartComponent } from './cart.component';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppFacade } from '../../NgrxStoreModule/app.facade';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../NgrxStoreModule';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from '../../NgrxStoreModule/app.effects';
import * as data from '../../data';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let service: AppFacade;
  const routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent],
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
      ],
    }).compileComponents();
    service = TestBed.inject(AppFacade);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('trackByTitle function', () => {
    const currentItem = data.bookList[0];
    const result = component.trackByTitle(1, currentItem);
    expect(result).toEqual(currentItem.volumeInfo.title);
  });
  it('navigateToBillingDetails Function', () => {
    spyOn(service, 'dispatchDeleteIncart').withArgs('');
    spyOn(service, 'dispatchNoOfBooks').withArgs(0);
    spyOn(service, 'dispatchNavigateToBillingDetails').withArgs('');
    component.navigateToBillingDetails('');
    expect(service.dispatchDeleteIncart).toHaveBeenCalledWith('');
    expect(service.dispatchNoOfBooks).toHaveBeenCalledWith(0);
    expect(service.dispatchNavigateToBillingDetails).toHaveBeenCalledWith('');
  });
  it('deleteFromCart function', () => {
    spyOn(service, 'dispatchDeleteIncart').withArgs('');
    spyOn(service, 'dispatchNoOfBooks').withArgs(0);
    component.deleteFromCart('');
    expect(service.dispatchDeleteIncart).toHaveBeenCalledWith('');
    expect(service.dispatchNoOfBooks).toHaveBeenCalledWith(0);
  });
});
