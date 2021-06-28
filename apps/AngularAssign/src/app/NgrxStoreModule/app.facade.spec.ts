import { reducers } from '../NgrxStoreModule';

import { TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { appState } from './app.reducer';
import { AppFacade } from './app.facade';
import * as appActions from './app.action';
import * as data from '../data';
describe('MyCollectionsComponent', () => {
  let facade: AppFacade;
  let store: Store<appState>;
  //   Add the imported module to the imports array in beforeEach
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(reducers)],
      providers: [AppFacade],
    }).compileComponents();
    store = TestBed.inject(Store);
    facade = TestBed.inject(AppFacade);
  });
  it('should be created', () => {
    expect(facade).toBeTruthy();
  });
  it('dispatchNavigateToBookDetails method', () => {
    const id = 'id';
    spyOn(store, 'dispatch').withArgs(new appActions.NavigateToBookDetails(id));
    facade.dispatchNavigateToBookDetails(id);
    expect(store.dispatch).toHaveBeenCalledWith(
      new appActions.NavigateToBookDetails(id)
    );
  });
  it('dispatchNavigateToBillingDetails method', () => {
    const id = 'id';
    spyOn(store, 'dispatch').withArgs(
      new appActions.NavigateToBillingDetails(id)
    );
    facade.dispatchNavigateToBillingDetails(id);
    expect(store.dispatch).toHaveBeenCalledWith(
      new appActions.NavigateToBillingDetails(id)
    );
  });
  it('dispatchNavigateToCart method', () => {
    spyOn(store, 'dispatch').withArgs(new appActions.NavigateToCart());
    facade.dispatchNavigateToCart();
    expect(store.dispatch).toHaveBeenCalledWith(
      new appActions.NavigateToCart()
    );
  });
  it('dispatchBookAlreadyPurchased method', () => {
    const value = true;
    spyOn(store, 'dispatch').withArgs(
      new appActions.BookAlreadyPurchased(value)
    );
    facade.dispatchBookAlreadyPurchased(value);
    expect(store.dispatch).toHaveBeenCalledWith(
      new appActions.BookAlreadyPurchased(value)
    );
  });
  it('dispatchAddInCart method', () => {
    spyOn(store, 'dispatch').withArgs(
      new appActions.AddIncart(data.bookList[0])
    );
    facade.dispatchAddInCart(data.bookList[0]);
    expect(store.dispatch).toHaveBeenCalledWith(
      new appActions.AddIncart(data.bookList[0])
    );
  });
  it('dispatchNoOfBooks method', () => {
    spyOn(store, 'dispatch').withArgs(new appActions.noOfBooks(0));
    facade.dispatchNoOfBooks(0);
    expect(store.dispatch).toHaveBeenCalledWith(new appActions.noOfBooks(0));
  });
  it('dispatchDeleteIncart method', () => {
    spyOn(store, 'dispatch').withArgs(new appActions.DeleteIncart('id'));
    facade.dispatchDeleteIncart('id');
    expect(store.dispatch).toHaveBeenCalledWith(
      new appActions.DeleteIncart('id')
    );
  });
});
