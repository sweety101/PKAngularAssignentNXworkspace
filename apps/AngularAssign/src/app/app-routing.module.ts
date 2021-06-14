import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { BookDetailsComponent } from './book-details/book-details.component';
const routes: Routes = [
  {path: 'search', component: SearchPageComponent},
  { path: 'bookDetails/:id', component: BookDetailsComponent },
  { path: 'billingDetails/:id', component: BillingDetailsComponent },
  {path: 'cartandcollection', loadChildren: './cartandcollection/cartandcollection.module#CartandcollectionModule'},
  { path: '', redirectTo: '/search', pathMatch: 'full' }
  // ,
  // { path: '**', component: SearchPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
