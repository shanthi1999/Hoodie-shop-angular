import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-productitems',
  templateUrl: './productitems.component.html',
  styleUrls: ['./productitems.component.css'],
})
export class ProductitemsComponent implements OnInit {

 @Input() productItem: Product

  constructor(
    private msg:MessengerService,
    private cartService:CartService
    
    ) {  }

  ngOnInit() { }
  
    handleAddToCart(){
      this.cartService.addProductTocart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })
}
}
