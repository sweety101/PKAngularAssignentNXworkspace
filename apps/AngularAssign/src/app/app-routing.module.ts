import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { BookDetailsComponent } from './book-details/book-details.component';
const routes: Routes = [
  { path: 'search', component: SearchPageComponent },
  { path: 'bookDetails/:id', component: BookDetailsComponent },
  { path: 'billingDetails/:id', component: BillingDetailsComponent },
  { path: 'cartModule', loadChildren: './cart/cart.module#CartModule' },
  {
    path: 'collectionModule',
    loadChildren: './collection/collection.module#CollectionModule',
  },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
