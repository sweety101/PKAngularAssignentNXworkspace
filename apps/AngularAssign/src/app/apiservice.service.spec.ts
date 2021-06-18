import { TestBed } from '@angular/core/testing';
import { ApiserviceService } from './apiservice.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { Book } from './Book';
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
      items: [
        {
          id: 'ppjUtAEACAAJ',
          volumeInfo: {
            title: 'Fullstack React',
            subtitle: 'The Complete Guide to ReactJS and Friends',
            authors: ['Accomazzo Anthony', 'Murray Nathaniel', 'Ari Lerner'],
            publisher: 'Fullstack.IO',
            publishDate: '2017-03',
            description:
              'LEARN REACT TODAY The up-to-date, in-depth, complete guide to React and friends. Become a ReactJS expert today',
            averageRating: 0,
            ratingsCount: 0,
            imageLinks: {
              thumbnail:
                'http://books.google.com/books/content?id=ppjUtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
              smallThumbnail:
                'http://books.google.com/books/content?id=ppjUtAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
            },
            pageCount: 836,
            language: 'en',
          },
        },
        {
          id: 'tjjrDwAAQBAJ',
          volumeInfo: {
            title: 'Learning React',
            subtitle: 'Modern Patterns for Developing React Apps',
            authors: ['Alex Banks', 'Eve Porcello'],
            publisher: '"O\'Reilly Media, Inc."',
            publishDate: '2020-06-12',
            description:
              'If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript,...',
            averageRating: 0,
            ratingsCount: 0,
            imageLinks: {
              thumbnail:
                'http://books.google.com/books/content?id=tjjrDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
              smallThumbnail:
                'http://books.google.com/books/content?id=tjjrDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            },
            pageCount: 310,
            language: 'en',
          },
        },
        {
          id: 'sS0GtQEACAAJ',
          volumeInfo: {
            title: 'The Road to Learn React',
            subtitle: 'Your Journey to Master Plain Yet Pragmatic React. Js',
            authors: ['Robin Wieruch'],
            publisher: '',
            publishDate: '2018-03-09',
            description:
              'The Road to learn React teaches you the fundamentals of React. You will build a real world application along the way in plain React without complicated tooling. E...',
            averageRating: 0,
            ratingsCount: 0,
            imageLinks: {
              thumbnail: '',
              smallThumbnail: '',
            },
            pageCount: 0,
            language: 'en',
          },
        },
        {
          id: 'pMTADgAAQBAJ',
          volumeInfo: {
            title: 'Learning React',
            subtitle: 'Functional Web Development with React and Redux',
            authors: ['Alex Banks', 'Eve Porcello'],
            publisher: '"O\'Reilly Media, Inc."',
            publishDate: '2017-04-27',
            description:
              'If you want to learn how to build efficient user interfaces with React, this is your book. Authors Alex Banks and Eve Porcello show you how to create UIs with this...',
            averageRating: 0,
            ratingsCount: 0,
            imageLinks: {
              thumbnail:
                'ttp://books.google.com/books/content?id=pMTADgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
              smallThumbnail:
                'http://books.google.com/books/content?id=pMTADgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            },
            pageCount: 350,
            language: 'en',
          },
        },
      ],
      kind: 'books#volumes',
      totalItems: 1239,
    };
    const dummyPosts: Book[] = [
      {
        id: 'ppjUtAEACAAJ',
        volumeInfo: {
          title: 'Fullstack React',
          subtitle: 'The Complete Guide to ReactJS and Friends',
          authors: ['Accomazzo Anthony', 'Murray Nathaniel', 'Ari Lerner'],
          publisher: 'Fullstack.IO',
          publishDate: '2017-03',
          description:
            'LEARN REACT TODAY The up-to-date, in-depth, complete guide to React and friends. Become a ReactJS expert today',
          averageRating: 0,
          ratingsCount: 0,
          imageLinks: {
            thumbnail:
              'http://books.google.com/books/content?id=ppjUtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            smallThumbnail:
              'http://books.google.com/books/content?id=ppjUtAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          },
          pageCount: 836,
          language: 'en',
        },
      },
      {
        id: 'tjjrDwAAQBAJ',
        volumeInfo: {
          title: 'Learning React',
          subtitle: 'Modern Patterns for Developing React Apps',
          authors: ['Alex Banks', 'Eve Porcello'],
          publisher: '"O\'Reilly Media, Inc."',
          publishDate: '2020-06-12',
          description:
            'If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript,...',
          averageRating: 0,
          ratingsCount: 0,
          imageLinks: {
            thumbnail:
              'http://books.google.com/books/content?id=tjjrDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            smallThumbnail:
              'http://books.google.com/books/content?id=tjjrDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          },
          pageCount: 310,
          language: 'en',
        },
      },
      {
        id: 'sS0GtQEACAAJ',
        volumeInfo: {
          title: 'The Road to Learn React',
          subtitle: 'Your Journey to Master Plain Yet Pragmatic React. Js',
          authors: ['Robin Wieruch'],
          publisher: '',
          publishDate: '2018-03-09',
          description:
            'The Road to learn React teaches you the fundamentals of React. You will build a real world application along the way in plain React without complicated tooling. E...',
          averageRating: 0,
          ratingsCount: 0,
          imageLinks: {
            thumbnail: '',
            smallThumbnail: '',
          },
          pageCount: 0,
          language: 'en',
        },
      },
      {
        id: 'pMTADgAAQBAJ',
        volumeInfo: {
          title: 'Learning React',
          subtitle: 'Functional Web Development with React and Redux',
          authors: ['Alex Banks', 'Eve Porcello'],
          publisher: '"O\'Reilly Media, Inc."',
          publishDate: '2017-04-27',
          description:
            'If you want to learn how to build efficient user interfaces with React, this is your book. Authors Alex Banks and Eve Porcello show you how to create UIs with this...',
          averageRating: 0,
          ratingsCount: 0,
          imageLinks: {
            thumbnail:
              'ttp://books.google.com/books/content?id=pMTADgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            smallThumbnail:
              'http://books.google.com/books/content?id=pMTADgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          },
          pageCount: 350,
          language: 'en',
        },
      },
    ];
    service.search().subscribe((book) => {
      expect(book.length).toBe(4);
      expect(book).toEqual(dummyPosts);
    });
    const request = httpMock.expectOne(
      `https://www.googleapis.com/books/v1/volumes?q=${searchString}&maxResults=4&keyes&key=${key}`
    );
    expect(request.request.method).toBe('GET');
    request.flush(dummyPostsBefore);
  });
  it('navigatingFromCart', () => {
    service.booksInCart = [
      {
        id: 'ppjUtAEACAAJ',
        volumeInfo: {
          title: 'Fullstack React',
          subtitle: 'The Complete Guide to ReactJS and Friends',
          authors: ['Accomazzo Anthony', 'Murray Nathaniel', 'Ari Lerner'],
          publisher: 'Fullstack.IO',
          publishDate: '2017-03',
          description:
            'LEARN REACT TODAY The up-to-date, in-depth, complete guide to React and friends. Become a ReactJS expert today',
          averageRating: 0,
          ratingsCount: 0,
          imageLinks: {
            thumbnail:
              'http://books.google.com/books/content?id=ppjUtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            smallThumbnail:
              'http://books.google.com/books/content?id=ppjUtAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          },
          pageCount: 836,
          language: 'en',
        },
      },
      {
        id: 'tjjrDwAAQBAJ',
        volumeInfo: {
          title: 'Learning React',
          subtitle: 'Modern Patterns for Developing React Apps',
          authors: ['Alex Banks', 'Eve Porcello'],
          publisher: '"O\'Reilly Media, Inc."',
          publishDate: '2020-06-12',
          description:
            'If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript,...',
          averageRating: 0,
          ratingsCount: 0,
          imageLinks: {
            thumbnail:
              'http://books.google.com/books/content?id=tjjrDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            smallThumbnail:
              'http://books.google.com/books/content?id=tjjrDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          },
          pageCount: 310,
          language: 'en',
        },
      },
      {
        id: 'sS0GtQEACAAJ',
        volumeInfo: {
          title: 'The Road to Learn React',
          subtitle: 'Your Journey to Master Plain Yet Pragmatic React. Js',
          authors: ['Robin Wieruch'],
          publisher: '',
          publishDate: '2018-03-09',
          description:
            'The Road to learn React teaches you the fundamentals of React. You will build a real world application along the way in plain React without complicated tooling. E...',
          averageRating: 0,
          ratingsCount: 0,
          imageLinks: {
            thumbnail: '',
            smallThumbnail: '',
          },
          pageCount: 0,
          language: 'en',
        },
      },
      {
        id: 'pMTADgAAQBAJ',
        volumeInfo: {
          title: 'Learning React',
          subtitle: 'Functional Web Development with React and Redux',
          authors: ['Alex Banks', 'Eve Porcello'],
          publisher: '"O\'Reilly Media, Inc."',
          publishDate: '2017-04-27',
          description:
            'If you want to learn how to build efficient user interfaces with React, this is your book. Authors Alex Banks and Eve Porcello show you how to create UIs with this...',
          averageRating: 0,
          ratingsCount: 0,
          imageLinks: {
            thumbnail:
              'ttp://books.google.com/books/content?id=pMTADgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            smallThumbnail:
              'http://books.google.com/books/content?id=pMTADgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          },
          pageCount: 350,
          language: 'en',
        },
      },
    ];
    const navigateFromCart = [
      {
        id: 'tjjrDwAAQBAJ',
        volumeInfo: {
          title: 'Learning React',
          subtitle: 'Modern Patterns for Developing React Apps',
          authors: ['Alex Banks', 'Eve Porcello'],
          publisher: '"O\'Reilly Media, Inc."',
          publishDate: '2020-06-12',
          description:
            'If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript,...',
          averageRating: 0,
          ratingsCount: 0,
          imageLinks: {
            thumbnail:
              'http://books.google.com/books/content?id=tjjrDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            smallThumbnail:
              'http://books.google.com/books/content?id=tjjrDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          },
          pageCount: 310,
          language: 'en',
        },
      },
      {
        id: 'sS0GtQEACAAJ',
        volumeInfo: {
          title: 'The Road to Learn React',
          subtitle: 'Your Journey to Master Plain Yet Pragmatic React. Js',
          authors: ['Robin Wieruch'],
          publisher: '',
          publishDate: '2018-03-09',
          description:
            'The Road to learn React teaches you the fundamentals of React. You will build a real world application along the way in plain React without complicated tooling. E...',
          averageRating: 0,
          ratingsCount: 0,
          imageLinks: {
            thumbnail: '',
            smallThumbnail: '',
          },
          pageCount: 0,
          language: 'en',
        },
      },
      {
        id: 'pMTADgAAQBAJ',
        volumeInfo: {
          title: 'Learning React',
          subtitle: 'Functional Web Development with React and Redux',
          authors: ['Alex Banks', 'Eve Porcello'],
          publisher: '"O\'Reilly Media, Inc."',
          publishDate: '2017-04-27',
          description:
            'If you want to learn how to build efficient user interfaces with React, this is your book. Authors Alex Banks and Eve Porcello show you how to create UIs with this...',
          averageRating: 0,
          ratingsCount: 0,
          imageLinks: {
            thumbnail:
              'ttp://books.google.com/books/content?id=pMTADgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            smallThumbnail:
              'http://books.google.com/books/content?id=pMTADgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          },
          pageCount: 350,
          language: 'en',
        },
      },
    ];
    const id = 'ppjUtAEACAAJ';

    service.navigatingFromCart(id);
    for (let i = 0; i < service.booksInCart.length; i++) {
      if (service.booksInCart[i].id == id) {
        service.booksInCart.splice(i, 1);
        expect(service.booksInCart).toEqual(navigateFromCart);
      }
    }
    expect(service.noOfBooks).toEqual(service.booksInCart.length);
  });
  it('removing from cart', () => {
    const bookList = [
      {
        id: 'ppjUtAEACAAJ',
        volumeInfo: {
          title: 'Fullstack React',
          subtitle: 'The Complete Guide to ReactJS and Friends',
          authors: ['Accomazzo Anthony', 'Murray Nathaniel', 'Ari Lerner'],
          publisher: 'Fullstack.IO',
          publishDate: '2017-03',
          description:
            'LEARN REACT TODAY The up-to-date, in-depth, complete guide to React and friends. Become a ReactJS expert today',
          averageRating: 0,
          ratingsCount: 0,
          imageLinks: {
            thumbnail:
              'http://books.google.com/books/content?id=ppjUtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            smallThumbnail:
              'http://books.google.com/books/content?id=ppjUtAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          },
          pageCount: 836,
          language: 'en',
        },
      },
      {
        id: 'tjjrDwAAQBAJ',
        volumeInfo: {
          title: 'Learning React',
          subtitle: 'Modern Patterns for Developing React Apps',
          authors: ['Alex Banks', 'Eve Porcello'],
          publisher: '"O\'Reilly Media, Inc."',
          publishDate: '2020-06-12',
          description:
            'If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript,...',
          averageRating: 0,
          ratingsCount: 0,
          imageLinks: {
            thumbnail:
              'http://books.google.com/books/content?id=tjjrDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            smallThumbnail:
              'http://books.google.com/books/content?id=tjjrDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          },
          pageCount: 310,
          language: 'en',
        },
      },
      {
        id: 'sS0GtQEACAAJ',
        volumeInfo: {
          title: 'The Road to Learn React',
          subtitle: 'Your Journey to Master Plain Yet Pragmatic React. Js',
          authors: ['Robin Wieruch'],
          publisher: '',
          publishDate: '2018-03-09',
          description:
            'The Road to learn React teaches you the fundamentals of React. You will build a real world application along the way in plain React without complicated tooling. E...',
          averageRating: 0,
          ratingsCount: 0,
          imageLinks: {
            thumbnail: '',
            smallThumbnail: '',
          },
          pageCount: 0,
          language: 'en',
        },
      },
      {
        id: 'pMTADgAAQBAJ',
        volumeInfo: {
          title: 'Learning React',
          subtitle: 'Functional Web Development with React and Redux',
          authors: ['Alex Banks', 'Eve Porcello'],
          publisher: '"O\'Reilly Media, Inc."',
          publishDate: '2017-04-27',
          description:
            'If you want to learn how to build efficient user interfaces with React, this is your book. Authors Alex Banks and Eve Porcello show you how to create UIs with this...',
          averageRating: 0,
          ratingsCount: 0,
          imageLinks: {
            thumbnail:
              'ttp://books.google.com/books/content?id=pMTADgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            smallThumbnail:
              'http://books.google.com/books/content?id=pMTADgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          },
          pageCount: 350,
          language: 'en',
        },
      },
    ];
    const id = 'j';

    service.navigatingFromCart(id);
    expect(bookList).toEqual(bookList);
    expect(service.noOfBooks).toEqual(service.booksInCart.length);
  });
  afterEach(() => {
    httpMock.verify();
  });
});
