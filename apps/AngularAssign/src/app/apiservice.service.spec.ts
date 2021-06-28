import { TestBed } from '@angular/core/testing';
import { ApiserviceService } from './apiservice.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { Book } from './Book';
import * as data from './data';
describe('ApiserviceService', () => {
  let service: ApiserviceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [ApiserviceService],
    });
    service = TestBed.inject(ApiserviceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('be able to retrieve posts from the API via GET', () => {
    const key = 'AIzaSyB9FNNtrceZnozsFIbYy-zZGohU9XaJG0c';
    const searchString = 'React';
    const dummyPostsBefore = {
      items: data.bookList,
      kind: 'books#volumes',
      totalItems: 1239,
    };
    const dummyPosts: Book[] = data.bookList;
    service.get(searchString, key).subscribe((book) => {
      expect(book.length).toBe(4);
      expect(book).toEqual(dummyPosts);
    });
    const request = httpMock.expectOne(
      `https://www.googleapis.com/books/v1/volumes?q=${searchString}&maxResults=4&keyes&key=${key}`
    );
    expect(request.request.method).toBe('GET');
    request.flush(dummyPostsBefore);
  });
});
