import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router} from '@angular/router'; 
import { ActivatedRoute } from '@angular/router';
import { Book } from '../Book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  id : string = '';
  bookDetails :any;
  subscription: Subscription;
  exists : boolean = false;
  constructor(private apiService: ApiserviceService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    let routeParams = this.route.params;
    this.subscription = routeParams.subscribe(params => {
      this.id = params.id;
      console.log('The id of this route is: ', params.id);
    });
    for(let i = 0; i < this.apiService.booksList.length; i++) {
      if(this.apiService.booksList[i].id == this.id){
        this.bookDetails = this.apiService.booksList[i];
        console.log(this.bookDetails);
      }
    }
  }

  navigateToCart (id : any) {
    this.router.navigate(['/cart']);
    for(let i = 0; i < this.apiService.booksList.length; i++) {
      if(this.apiService.booksList[i].id == id){
        for(let i = 0; i < this.apiService.booksInCart.length; i++) {
            if(this.apiService.booksInCart[i].id == id){
              this.exists =  true;
            }
        }
        if(!this.exists){
          this.apiService.booksInCart.push(this.apiService.booksList[i]);
        }
      }
    }
    this.apiService.noOfBooks = this.apiService.booksInCart.length;
  }

  navigateToBillingDetails (id : any) {
    this.router.navigate(['/billingDetails', id]);
  }
  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

}
