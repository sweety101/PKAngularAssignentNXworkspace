import * as Actions from './app.action';
import * as data from '../data';
describe('Test Actions', () => {
  it('SHOULD create a NavigateToCart action', () => {
    const action = new Actions.NavigateToCart();
    expect(action.type).toEqual(Actions.NAVIGATE_TO_CART);
  });

  it('SHOULD create a NAVIGATE_TO_BOOK_DETAILS action containing a payload', () => {
    const payload = 'ppjUtAEACAAJ';
    const action = new Actions.NavigateToBookDetails(payload);

    expect({ ...action }).toEqual({
      type: Actions.NAVIGATE_TO_BOOK_DETAILS,
      payload,
    });
  });
  it('SHOULD create a NAVIGATE_TO_BILLING_DETAILS action containing a payload', () => {
    const payload = 'ppjUtAEACAAJ';
    const action = new Actions.NavigateToBillingDetails(payload);

    expect({ ...action }).toEqual({
      type: Actions.NAVIGATE_TO_BILLING_DETAILS,
      payload,
    });
  });
  it('SHOULD create a BOOK_ALREADY_PURCHASED action containing a payload', () => {
    const payload = false;
    const action = new Actions.BookAlreadyPurchased(payload);

    expect({ ...action }).toEqual({
      type: Actions.BOOK_ALREADY_PURCHASED,
      payload,
    });
  });
  it('SHOULD create a NO_OF_BOOKSPURCHASED action containing a payload', () => {
    const payload = 1;
    const action = new Actions.noOfBooksPurchased(payload);

    expect({ ...action }).toEqual({
      type: Actions.NO_OF_BOOKSPURCHASED,
      payload,
    });
  });
  it('SHOULD create a NO_OF_BOOKS action containing a payload', () => {
    const payload = 1;
    const action = new Actions.noOfBooks(payload);

    expect({ ...action }).toEqual({
      type: Actions.NO_OF_BOOKS,
      payload,
    });
  });
  it('SHOULD create a ADD_BILLING_DETAILS action containing a payload', () => {
    const payload = {
      id: 'ppjUtAEACAAJ',
      address: 'wing-6',
      email: 'sweety@gmail.com',
      name: 'sweety',
      phoneNumber: '9897172571',
    };
    const action = new Actions.AddBillingDetials(payload);

    expect({ ...action }).toEqual({
      type: Actions.ADD_BILLING_DETAILS,
      payload,
    });
  });
  it('SHOULD create a ADD_BOOKS_PURCHASED action containing a payload', () => {
    const payload = data.bookList[0];
    const action = new Actions.AddBooksPurchased(payload);

    expect({ ...action }).toEqual({
      type: Actions.ADD_BOOKS_PURCHASED,
      payload,
    });
  });
  it('SHOULD create a GET_BOOK_LIST action containing a payload', () => {
    const payload = data.bookList;
    const action = new Actions.GetBookList(payload);

    expect({ ...action }).toEqual({
      type: Actions.GET_BOOK_LIST,
      payload,
    });
  });
  it('SHOULD create a GET_BOOKS action containing a payload', () => {
    const payload = {
      searchString: 'React',
      key: 'AIzaSyDQO3ciIFhJaxNrRJR93nl9YpjxpTG_YLM',
    };
    const action = new Actions.GetBooks(payload);

    expect({ ...action }).toEqual({
      type: Actions.GET_BOOKS,
      payload,
    });
  });
  it('SHOULD create a DELETE_INCART action containing a payload', () => {
    const payload = 'ppjUtAEACAAJ';
    const action = new Actions.DeleteIncart(payload);

    expect({ ...action }).toEqual({
      type: Actions.DELETE_INCART,
      payload,
    });
  });
  it('SHOULD create a ADD_INCART action containing a payload', () => {
    const payload = data.bookList[0];
    const action = new Actions.AddIncart(payload);

    expect({ ...action }).toEqual({
      type: Actions.ADD_INCART,
      payload,
    });
  });
});
