import { Component, OnInit } from '@angular/core';
import { AppFacade } from './NgrxStoreModule/app.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AngularAssign';
  cartCount = 0;
  collectionCount = 0;

  constructor(private appFacade: AppFacade) {}
  ngOnInit(): void {
    this.appFacade.selectBooks().subscribe((data) => {
      this.cartCount = data.noOfBooks;
      this.collectionCount = data.noOfBooksPurchased;
    });
  }
}
