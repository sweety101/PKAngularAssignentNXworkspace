import * as Reducer from './app.reducer';
import * as Actions from './app.action';
import * as data from '../data';

describe('Store > Data > DataReducer', () => {
  afterEach(() => {
    (Reducer.initialState.booksInCart = []),
      (Reducer.initialState.bookList = []),
      (Reducer.initialState.booksPurchased = []),
      (Reducer.initialState.billingDetails = []),
      (Reducer.initialState.noOfBooksPurchased = 0),
      (Reducer.initialState.noOfBooks = 0),
      (Reducer.initialState.booksAlreadyPurchased = false),
      (Reducer.initialState.recentSearches = []);
  });

  it('SHOULD return the default state', () => {
    const { initialState } = Reducer;
    const payload = 'ppjUtAEACAAJ';
    const action = new Actions.NavigateToBookDetails(payload);
    const state = Reducer.appReducer(initialState, action);

    expect(state).toBe(initialState);
  });

  it('SHOULD update BookAlreadyPurchased', () => {
    const { initialState } = Reducer;
    const payload = false;
    const action = new Actions.BookAlreadyPurchased(payload);
    const state = Reducer.appReducer(initialState, action);

    expect(state.booksAlreadyPurchased).toEqual(payload);
  });
  it('SHOULD update noOfBooksPurchased', () => {
    const { initialState } = Reducer;
    const payload = 0;
    const action = new Actions.noOfBooksPurchased(payload);
    const state = Reducer.appReducer(initialState, action);

    expect(state.noOfBooksPurchased).toEqual(payload);
  });
  it('SHOULD update noOfBooks', () => {
    const { initialState } = Reducer;
    const payload = 0;
    const action = new Actions.noOfBooks(payload);
    const state = Reducer.appReducer(initialState, action);

    expect(state.noOfBooks).toEqual(payload);
  });
  it('SHOULD update AddBillingDetials', () => {
    const { initialState } = Reducer;
    const payload = data.billingDetails;
    const action = new Actions.AddBillingDetials(payload);
    const state = Reducer.appReducer(initialState, action);

    expect(state.billingDetails).toEqual([payload]);
  });
  it('SHOULD update AddBooksPurchased', () => {
    const { initialState } = Reducer;
    const payload = data.bookList[0];
    const action = new Actions.AddBooksPurchased(payload);
    const state = Reducer.appReducer(initialState, action);

    expect(state.booksPurchased).toEqual([payload]);
  });
  it('SHOULD update GetBookList', () => {
    const { initialState } = Reducer;
    const payload = data.bookList;
    const action = new Actions.GetBookList(payload);
    const state = Reducer.appReducer(initialState, action);

    expect(state.bookList).toEqual(payload);
  });
  it('SHOULD update GetBooks', () => {
    const { initialState } = Reducer;
    const payload = { searchString: 'React', key: data.bookList[0].id };
    const action = new Actions.GetBooks(payload);
    const state = Reducer.appReducer(initialState, action);

    expect(state.recentSearches).toEqual([payload.searchString]);
  });
  it('SHOULD update DeleteIncart', () => {
    const { initialState } = Reducer;
    const payload = data.bookList[0].id;
    const action = new Actions.DeleteIncart(payload);
    const state = Reducer.appReducer(initialState, action);
    expect(state.booksInCart).toEqual(initialState.booksInCart);
  });
  it('SHOULD update AddIncart', () => {
    const { initialState } = Reducer;
    const payload = data.bookList[0];
    const action = new Actions.AddIncart(payload);
    const state = Reducer.appReducer(initialState, action);

    expect(state.booksInCart).toEqual([payload]);
  });
});
