import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiserviceService } from '../../apiservice.service';
import { MyCollectionsComponent } from './my-collections.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MyCollectionsComponent', () => {
  let component: MyCollectionsComponent;
  let fixture: ComponentFixture<MyCollectionsComponent>;
  let service: ApiserviceService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyCollectionsComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatCardModule,
        BrowserAnimationsModule,
      ],
      providers: [ApiserviceService],
    }).compileComponents();
    service = TestBed.inject(ApiserviceService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('NgOninit', () => {
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
        address: '',
        email: '',
        name: '',
        phoneNumber: '',
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
        address: '',
        email: '',
        name: '',
        phoneNumber: '',
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
        address: '',
        email: '',
        name: '',
        phoneNumber: '',
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
        address: '',
        email: '',
        name: '',
        phoneNumber: '',
      },
    ];
    const booksCollectionDetails = [];
    service.billingDetails = [
      {
        id: 'ppjUtAEACAAJ',
        address: 'wing-6',
        email: 'sweety@gmail.com',
        name: 'sweety',
        phoneNumber: '9897172571',
      },
    ];
    component.ngOnInit();
    expect(service.billingDetails[0].id).toEqual(service.booksPurchased[0].id);
    expect(service.booksPurchased[0].address).toEqual(
      service.billingDetails[0].address
    );
    expect(service.booksPurchased[0].email).toEqual(
      service.billingDetails[0].email
    );
    expect(service.booksPurchased[0].name).toEqual(
      service.billingDetails[0].name
    );
    expect(service.booksPurchased[0].phoneNumber).toEqual(
      service.billingDetails[0].phoneNumber
    );
  });
});
