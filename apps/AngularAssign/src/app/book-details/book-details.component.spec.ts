import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiserviceService } from '../apiservice.service';
import { BookDetailsComponent } from './book-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let service: ApiserviceService;
  const routerSpy = { navigate: jasmine.createSpy('navigate') };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookDetailsComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatCardModule,
        MatButtonModule,
        BrowserAnimationsModule,
      ],
      providers: [
        ApiserviceService,
        {
          provide: Router,
          useValue: routerSpy,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '' }),
          },
        },
      ],
    }).compileComponents();
    service = TestBed.inject(ApiserviceService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('ngOnInit', () => {
    service.booksList = [
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
    component.bookDetails = {
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
    };
    component.ngOnInit();
    component.id = 'ppjUtAEACAAJ';
    expect(service.booksList[0].id).toEqual(component.id);
    expect(component.bookDetails).toEqual(service.booksList[0]);
  });
  it('should navigate to BookDetails page', () => {
    component.navigateToBillingDetails('ppjUtAEACAAJ');
    expect(routerSpy.navigate).toHaveBeenCalledWith([
      '/billingDetails',
      'ppjUtAEACAAJ',
    ]);
  });
  it('should navigate to cart ', () => {
    service.booksList = [
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
    ];
    component.id = 'ppjUtAEACAAJ';
    component.navigateToCart('ppjUtAEACAAJ');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/cart']);
    expect(service.booksList[0].id).toEqual(component.id);
    expect(service.booksInCart[0].id).toEqual(component.id);
    expect(component.exists).toBe(true);
  });
  it('should not navigate to cart ', () => {
    service.booksList = [
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
    ];
    const booksInCart = [
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
    ];
    component.id = 'ppjUtAEACAAJ';
    component.exists = false;
    component.navigateToCart('ppjUtAEACAAJ');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/cart']);
    expect(service.booksList[0].id).toEqual(component.id);
    expect(service.booksInCart).toEqual(booksInCart);
    expect(service.noOfBooks).toEqual(service.booksInCart.length);
  });
});
