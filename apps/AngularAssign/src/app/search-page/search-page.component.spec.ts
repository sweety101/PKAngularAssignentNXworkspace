import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchPageComponent } from './search-page.component';
import { ApiserviceService } from '../apiservice.service';
import { of } from 'rxjs';
import { Book } from '../Book';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;
  let service: ApiserviceService;
  const routerSpy = { navigate: jasmine.createSpy('navigate') };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchPageComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatIconModule,
        BrowserAnimationsModule,
      ],
      providers: [
        ApiserviceService,
        {
          provide: Router,
          useValue: routerSpy,
        },
      ],
    }).compileComponents();
    service = TestBed.inject(ApiserviceService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'AngularAssign'`, () => {
    expect(component.books).toBeFalsy();
  });

  it(`getData`, fakeAsync(() => {
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
    spyOn(service, 'search').and.returnValue(of(dummyPosts));
    component.getData('React');
    tick();
    expect(component.results).toEqual(dummyPosts);
    expect(component.books).toBe(true);
    expect(service.booksList).toEqual(dummyPosts);
  }));

  it('trackByTitle function', () => {
    const currentItem = {
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
    };
    const result = component.trackByTitle(1, currentItem);
    expect(result).toEqual(currentItem.volumeInfo.title);
  });

  it('should navigate to BookDetails page', () => {
    component.navigateToBookDetails('ppjUtAEACAAJ');
    expect(routerSpy.navigate).toHaveBeenCalledWith([
      '/bookDetails',
      'ppjUtAEACAAJ',
    ]);
  });
});
