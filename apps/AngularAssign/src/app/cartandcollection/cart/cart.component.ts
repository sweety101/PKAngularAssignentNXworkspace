import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router} from '@angular/router'; 
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../../apiservice.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  cartId : string = '';
  books : any = [];
  exists : boolean = false;
  subscription: Subscription
  constructor(private apiService: ApiserviceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // let routeParams = this.route.params;
    // this.subscription = routeParams.subscribe(params => {
    //   this.cartId = params.id;
    //   console.log('The id of this route is: ', params.id);
    // });
    // for(let i = 0; i < this.apiService.booksList.length; i++) {
    //   if(this.apiService.booksList[i].id == this.cartId){
    //     for(let i = 0; i < this.apiService.booksInCart.length; i++) {
    //         if(this.apiService.booksInCart[i].id == this.cartId){
    //           this.exists =  true;
    //         }
    //     }
    //     if(!this.exists){
    //       this.apiService.booksInCart.push(this.apiService.booksList[i]);
    //     }
    //   }
    // }
    this.books = this.apiService.booksInCart;
    // this.apiService.noOfBooks = this.apiService.booksInCart.length;
    console.log(this.books);
  }
  trackByTitle(index: number, currentItem: any): string {
    return currentItem.title;
  }
  navigateToBillingDetails(id : string){
    this.apiService.navigatingFromCart( id);
    this.router.navigate(['/billingDetails', id]);
  }
  deleteFromCart(id : string) {
    for(let i = 0; i < this.apiService.booksInCart.length; i++) {
      if(this.apiService.booksInCart[i].id == id){
        this.apiService.booksInCart.splice(i, 1); 
        console.log(this.apiService.booksInCart);
      }
  }
  this.apiService.noOfBooks = this.apiService.booksInCart.length;
  }
  ngOnDestroy () {
    // this.subscription.unsubscribe();
  }
}
