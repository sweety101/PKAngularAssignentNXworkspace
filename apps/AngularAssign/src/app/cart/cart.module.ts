import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRoutingModule, MaterialModule, SharedModule],
})
export class CartModule {}
