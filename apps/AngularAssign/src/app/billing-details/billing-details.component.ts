import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { Router} from '@angular/router'; 
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { BillingDetails } from '../BillingDetails';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.css']
})
export class BillingDetailsComponent implements OnInit, OnDestroy {
  billingForm : any;
  bookId : string = '';
  constructor(private formBuilder: FormBuilder, private matDialog: MatDialog, private apiService: ApiserviceService, private route: ActivatedRoute) { }
  subscription: Subscription;
  ngOnInit(): void {
    this.apiService.bookAlreadyPurchased = false;
    let routeParams = this.route.params;
    this.subscription = routeParams.subscribe(params => {
      this.bookId = params.id;
      console.log('The id of this route is: ', params.id);
    });
    this.billingForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required]
    });
  }
  openDialog(value : any) {
    console.log(value);
    value.id = this.bookId;
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(DialogBodyComponent, dialogConfig);
    for(let i = 0; i < this.apiService.booksList.length; i++) {
      if(this.apiService.booksList[i].id == this.bookId){
        for(let j = 0; j < this.apiService.booksPurchased.length; j++) {
            if(this.apiService.booksPurchased[j].id == this.bookId){
              this.apiService.bookAlreadyPurchased =  true;
            }
        }
      }
      if(this.apiService.booksList[i].id == this.bookId && !this.apiService.bookAlreadyPurchased){
        this.apiService.booksPurchased.push(this.apiService.booksList[i]);
        this.apiService.billingDetails.push(value);
        console.log('billingDetails',this.apiService.billingDetails);
        this.apiService.noOfBooksPurchased = this.apiService.booksPurchased.length;
        console.log(this.apiService.booksPurchased);
      }
    }
  }
  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

}
