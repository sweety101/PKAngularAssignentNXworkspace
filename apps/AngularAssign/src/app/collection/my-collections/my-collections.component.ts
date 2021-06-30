import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';
import { Book } from '../../Book';
import { Subscription } from 'rxjs';
import { BillingDetails } from '../../BillingDetails';
import { AppFacade } from '../../NgrxStoreModule/app.facade';

@Component({
  selector: 'app-my-collections',
  templateUrl: './my-collections.component.html',
  styleUrls: ['./my-collections.component.css'],
})
export class MyCollectionsComponent implements OnInit, OnDestroy {
  booksCollectionDetails: Book[] = [];
  subscription: Subscription;
  booksPurchased: Book[];
  billingDetails: BillingDetails[];
  constructor(
    private apiService: ApiserviceService,
    private appFacade: AppFacade
  ) {}

  ngOnInit(): void {
    this.subscription = this.appFacade.selectBooks().subscribe((data) => {
      this.booksPurchased = data.booksPurchased;
      this.billingDetails = data.billingDetails;
      this.booksCollectionDetails = data.bookCollection;
    });
    for (let i = 0; i < this.booksPurchased.length; i++) {
      for (let j = 0; j < this.billingDetails.length; j++) {
        if (this.billingDetails[j].id == this.booksPurchased[i].id) {
          this.booksPurchased[i].address = this.billingDetails[j].address;
          this.booksPurchased[i].email = this.billingDetails[j].email;
          this.booksPurchased[i].name = this.billingDetails[j].name;
          this.booksPurchased[i].phoneNumber = this.billingDetails[
            j
          ].phoneNumber;
          this.appFacade.dispatchAddToCollections(this.booksPurchased[i]);
        }
      }
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
