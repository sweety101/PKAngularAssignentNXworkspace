import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ApiserviceService } from './apiservice.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchPageComponent } from './search-page/search-page.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { MaterialModule } from './material.module';
import { CartandcollectionModule } from './cartandcollection/cartandcollection.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    BookDetailsComponent,
    BillingDetailsComponent,
    DialogBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    CartandcollectionModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
