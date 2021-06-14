import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartandcollectionRoutingModule } from './cartandcollection-routing.module';
import { CartComponent } from './cart/cart.component';
import { MyCollectionsComponent } from './my-collections/my-collections.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    CartComponent,
    MyCollectionsComponent
  ],
  imports: [
    CommonModule,
    CartandcollectionRoutingModule,
    MaterialModule
  ]
})
export class CartandcollectionModule { }
