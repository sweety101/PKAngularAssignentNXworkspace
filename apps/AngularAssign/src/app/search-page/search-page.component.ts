import { Component, OnInit } from '@angular/core';
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
  key = 'AIzaSyDQO3ciIFhJaxNrRJR93nl9YpjxpTG_YLM';
  searchString = 'React';
  constructor(private appFacade: AppFacade) {}
  ngOnInit(): void {
    this.getData('React', this.key);
  }
  getData(value: string, key: string): void {
    this.searchString = value;
    this.appFacade.dispatchGetBooks(value, key);
    this.appFacade.selectBooks().subscribe((data) => {
      this.books = true;
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
