import { Component } from '@angular/core';
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularAssign';
  books = false;
  cartCount = 0;
  collectionCount = 0;
  constructor(private apiService: ApiserviceService) {}
  ngOnInit(): void {
    this.cartCount = this.apiService.noOfBooks;
    this.collectionCount = this.apiService.noOfBooksPurchased;
  }
  ngDoCheck(): void {
    this.cartCount = this.apiService.noOfBooks;
    this.collectionCount = this.apiService.noOfBooksPurchased;
  }
}
