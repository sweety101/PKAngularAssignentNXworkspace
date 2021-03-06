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
import { CartModule } from './cart/cart.module';
import { CollectionModule } from './collection/collection.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './NgrxStoreModule';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './NgrxStoreModule/app.effects';
import { AppFacade } from './NgrxStoreModule/app.facade';
@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    BookDetailsComponent,
    BillingDetailsComponent,
    DialogBodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    CartModule,
    CollectionModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [ApiserviceService, AppFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
