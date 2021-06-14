import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router} from '@angular/router'; 
import { Book } from '../Book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit, OnDestroy {
  books : boolean = false;
  results : any;
  subscription: Subscription
  constructor(private apiService: ApiserviceService, private router: Router) { }
  ngOnInit(): void {
    this.getData('React');
  }
  getData(value : string){
    console.log(value);
    let searchAPI = this.apiService.search(value);
    this.subscription = searchAPI.subscribe(data => {
      this.books = true;
      this.apiService.booksList = data;
      this.results = data;
      console.log(data);
    });
  }
  trackByTitle(index: number, currentItem: any): string {
    return currentItem.title;
  }
  navigateToBookDetails(id : string) {
    this.router.navigate(['/bookDetails', id]);
  }
  ngOnDestroy () {
    this.subscription.unsubscribe();
  }
}
