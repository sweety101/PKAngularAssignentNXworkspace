import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { BillingDetails } from '../BillingDetails';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.css'],
})
export class BillingDetailsComponent implements OnInit, OnDestroy {
  billingForm: FormGroup;
  bookId = '';
  subscription: Subscription;
  constructor(
    private formBuilder: FormBuilder,
    private matDialog: MatDialog,
    private apiService: ApiserviceService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.apiService.bookPurchased(false);
    const routeParams = this.route.params;
    this.subscription = routeParams.subscribe((params) => {
      this.bookId = params.id;
    });
    this.billingForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
    });
  }
  openDialog(value: BillingDetails): void {
    value.id = this.bookId;
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(DialogBodyComponent, dialogConfig);
    for (let i = 0; i < this.apiService.booksList.length; i++) {
      if (this.apiService.booksList[i].id == this.bookId) {
        for (let j = 0; j < this.apiService.booksPurchased.length; j++) {
          if (this.apiService.booksPurchased[j].id == this.bookId) {
            this.apiService.bookPurchased(true);
          }
        }
      }
      if (
        this.apiService.booksList[i].id == this.bookId &&
        !this.apiService.bookAlreadyPurchased
      ) {
        this.apiService.booksPurchased.push(this.apiService.booksList[i]);
        this.apiService.billingDetails.push(value);
        this.apiService.noOfBooksPurchased = this.apiService.booksPurchased.length;
      }
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
