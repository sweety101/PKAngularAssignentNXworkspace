import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
import { Book } from '../Book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit, OnDestroy {
  books = false;
  results: Book[];
  subscription: Subscription;
  constructor(private apiService: ApiserviceService, private router: Router) {}
  ngOnInit(): void {
    this.getData('React');
  }
  getData(value: string): void {
    this.apiService.searchString = value;
    this.subscription = this.apiService.search().subscribe((data) => {
      this.books = true;
      this.apiService.booksList = data;
      this.results = data;
    });
  }
  trackByTitle(index: number, currentItem: Book): string {
    return currentItem.volumeInfo.title;
  }
  navigateToBookDetails(id: string): void {
    this.router.navigate(['/bookDetails', id]);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
