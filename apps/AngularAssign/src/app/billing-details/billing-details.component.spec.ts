import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BillingDetailsComponent } from './billing-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiserviceService } from '../apiservice.service';

describe('BillingDetailsComponent', () => {
  let component: BillingDetailsComponent;
  let fixture: ComponentFixture<BillingDetailsComponent>;
  let service: ApiserviceService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillingDetailsComponent],
      imports: [
        MatDialogModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
      ],
      providers: [FormBuilder],
    }).compileComponents();
    service = TestBed.inject(ApiserviceService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('openDialog Function', () => {
    const value = {
      id: 'ppjUtAEACAAJ',
      address: 'wing-6',
      email: 'sweety@gmail.com',
      name: 'sweety',
      phoneNumber: '9897172571',
    };
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
    service.booksPurchased = [
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
    service.bookAlreadyPurchased = true;
    component.bookId = 'ppjUtAEACAAJ';
    component.openDialog(value);
    expect(service.booksList[0].id).toEqual(component.bookId);
    expect(service.booksPurchased[0].id).toEqual(component.bookId);
    expect(service.bookAlreadyPurchased).toEqual(true);
  });
  it('openDialog Function bookAlreadyPurchased', () => {
    const value = {
      id: 'ppjUtAEACAAJ',
      address: 'wing-6',
      email: 'sweety@gmail.com',
      name: 'sweety',
      phoneNumber: '9897172571',
    };
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
    service.booksPurchased = [];
    service.billingDetails = [];
    service.bookAlreadyPurchased = false;
    service.noOfBooksPurchased = 1;
    component.bookId = 'ppjUtAEACAAJ';
    component.openDialog(value);
    expect(service.booksList[0].id).toEqual(component.bookId);
    expect(service.bookAlreadyPurchased).toBe(false);
    expect(service.noOfBooksPurchased).toEqual(service.booksPurchased.length);
  });
});
