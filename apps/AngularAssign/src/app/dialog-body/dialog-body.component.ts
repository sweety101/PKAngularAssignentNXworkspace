import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {
  bookAlreadyPurchased : boolean = false;
  constructor(public dialogRef: MatDialogRef<DialogBodyComponent>, private apiService: ApiserviceService) { }

  ngOnInit(): void {
    this.bookAlreadyPurchased = this.apiService.bookAlreadyPurchased;
  }
  close() {
    this.dialogRef.close("Thanks for using me!");
  }
}
