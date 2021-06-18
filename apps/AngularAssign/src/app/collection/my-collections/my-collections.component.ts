import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';
import { Book } from '../../Book';

@Component({
  selector: 'app-my-collections',
  templateUrl: './my-collections.component.html',
  styleUrls: ['./my-collections.component.css'],
})
export class MyCollectionsComponent implements OnInit {
  booksCollectionDetails: Book[] = [];
  constructor(private apiService: ApiserviceService) {}

  ngOnInit(): void {
    for (let i = 0; i < this.apiService.booksPurchased.length; i++) {
      for (let j = 0; j < this.apiService.billingDetails.length; j++) {
        if (
          this.apiService.billingDetails[j].id ==
          this.apiService.booksPurchased[i].id
        ) {
          this.apiService.booksPurchased[
            i
          ].address = this.apiService.billingDetails[j].address;
          this.apiService.booksPurchased[
            i
          ].email = this.apiService.billingDetails[j].email;
          this.apiService.booksPurchased[
            i
          ].name = this.apiService.billingDetails[j].name;
          this.apiService.booksPurchased[
            i
          ].phoneNumber = this.apiService.billingDetails[j].phoneNumber;
          this.booksCollectionDetails.push(this.apiService.booksPurchased[i]);
        }
      }
    }
  }
}
