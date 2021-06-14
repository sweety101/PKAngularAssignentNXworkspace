import { Component } from '@angular/core';
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'AngularAssign';
  books : boolean = false;
  results : any;
  cartCount : number = 0;
  collectionCount : number = 0;
  constructor (private apiService: ApiserviceService) {}
  ngOnInit () {
    this.cartCount = this.apiService.noOfBooks;
    this.collectionCount = this.apiService.noOfBooksPurchased;

  }
  ngDoCheck(){
    this.cartCount = this.apiService.noOfBooks;
    this.collectionCount = this.apiService.noOfBooksPurchased;
  }
}
