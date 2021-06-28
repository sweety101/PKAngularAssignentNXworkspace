import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchPageComponent } from './search-page.component';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppFacade } from '../NgrxStoreModule/app.facade';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../NgrxStoreModule';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from '../NgrxStoreModule/app.effects';
import * as data from '../data';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;
  let service: AppFacade;
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
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([AppEffects]),
      ],
      providers: [
        {
          provide: Router,
          useValue: routerSpy,
        },
        AppFacade,
      ],
    }).compileComponents();
    service = TestBed.inject(AppFacade);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('trackByTitle function', () => {
    const result = component.trackByTitle(1, data.bookList[0]);
    expect(result).toEqual(data.bookList[0].volumeInfo.title);
  });

  it('should navigate to BookDetails page', () => {
    spyOn(service, 'dispatchNavigateToBookDetails');
    component.navigateToBookDetails('ppjUtAEACAAJ');
    expect(service.dispatchNavigateToBookDetails).toHaveBeenCalled();
  });
});
