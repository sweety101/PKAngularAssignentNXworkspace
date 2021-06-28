import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppFacade } from '../NgrxStoreModule/app.facade';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css'],
})
export class DialogBodyComponent implements OnInit {
  bookAlreadyPurchased: boolean;
  constructor(
    public dialogRef: MatDialogRef<DialogBodyComponent>,
    private appFacade: AppFacade
  ) {}

  ngOnInit(): void {
    this.appFacade.selectBooks().subscribe((data) => {
      this.bookAlreadyPurchased = data.booksAlreadyPurchased;
    });
  }
  close(): void {
    this.dialogRef.close('Thanks for using me!');
  }
}
