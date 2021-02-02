  import { Component, OnInit, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service'
import { Cartitem } from 'src/app/models/cartitem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [

    //{id:1, productId:1, productName:'Test 1', Qty:4, Price: 100},
    //{id:2, productId:2, productName:'Test 2', Qty:5, Price: 50},
    //{id:3, productId:3, productName:'Test 3', Qty:3, Price: 150},
    //{id:4, productId:4, productName:'Test 4', Qty:2, Price: 200}

  ];

  cartTotal = 0

  constructor(
    private msg: MessengerService,
    private cartServices: CartService
    ) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
   }
 
   handleSubscription(){
    this.msg.getMsg().subscribe((product: Product) => {
        this.loadCartItems();
        })
      }    
    

      loadCartItems(){
         this.cartServices.getCartItems().subscribe((item:Cartitem[]) => {
            this.cartItems = item;
            this.CalCartTotal();
         })
      }
       CalCartTotal(){
        this.cartTotal = 0;
       this.cartItems.forEach(item => {
       this.cartTotal += (item.qty * item.price)
       })
     }
    }
  
  