import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Book } from '../Book';
import { AppFacade } from '../NgrxStoreModule/app.facade';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  books: boolean;
  results: Book[];
  searchString = 'React';
  key: string;
  error: string;
  constructor(
    private appFacade: AppFacade,
    private apiservice: ApiserviceService
  ) {}
  ngOnInit(): void {
    this.getData('React', this.apiservice.key);
    this.key = this.apiservice.key;
  }
  getData(value: string, key: string): void {
    this.searchString = value;
    this.appFacade.dispatchGetBooks(value, key);
    this.appFacade.selectBooks().subscribe((data) => {
      this.books = true;
      this.error = data.getBookError;
      console.log(this.error);
      this.results = data.bookList;
    });
  }
  trackByTitle(index: number, currentItem: Book): string {
    return currentItem.volumeInfo.title;
  }
  navigateToBookDetails(id: string): void {
    this.appFacade.dispatchNavigateToBookDetails(id);
  }
}
