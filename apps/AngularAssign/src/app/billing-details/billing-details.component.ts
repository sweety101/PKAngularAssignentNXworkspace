import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { ActivatedRoute } from '@angular/router';
import { BillingDetails } from '../BillingDetails';
import { Subscription } from 'rxjs';
import { Book } from '../Book';
import { AppFacade } from '../NgrxStoreModule/app.facade';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.css'],
})
export class BillingDetailsComponent implements OnInit, OnDestroy {
  billingForm: FormGroup;
  bookId = '';
  subscription: Subscription;
  subscription1: Subscription;
  bookList: Book[];
  booksPurchased: Book[];
  bookAlreadyPurchased: boolean;
  book: Book;
  constructor(
    private formBuilder: FormBuilder,
    private matDialog: MatDialog,
    private route: ActivatedRoute,
    private appFacade: AppFacade
  ) {}
  ngOnInit(): void {
    this.appFacade.selectBooks().subscribe((data) => {
      this.bookList = data.bookList;
      this.booksPurchased = data.booksPurchased;
      this.bookAlreadyPurchased = data.booksAlreadyPurchased;
    });

    this.subscription = this.getParams().subscribe((params) => {
      this.bookId = params.id;
    });
    this.billingForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
    });
  }
  getParams(): ActivatedRoute['params'] {
    return this.route.params;
  }
  openDialog(value: BillingDetails): void {
    value.id = this.bookId;
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(DialogBodyComponent, dialogConfig);
    this.bookAlreadyPurchased = false;
    for (let i = 0; i < this.bookList.length; i++) {
      if (this.bookList[i].id == this.bookId) {
        this.book = this.bookList[i];
        this.checkBooksPurchased();
      }
    }
    if (!this.bookAlreadyPurchased) {
      this.appFacade.dispatchAddBooksPurchased(this.book);
      this.appFacade.dispatchnoOfBooksPurchased(this.booksPurchased.length);
      this.appFacade.dispatchAddBillingDetials(value);
    }
  }
  checkBooksPurchased(): void {
    for (let j = 0; j < this.booksPurchased.length; j++) {
      if (this.booksPurchased[j].id == this.bookId) {
        this.appFacade.dispatchBookAlreadyPurchased(true);
      }
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
