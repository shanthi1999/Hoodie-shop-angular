import { Injectable } from '@angular/core';
import { Cartitem } from '../models/cartitem';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { cartUrl } from '../config/api';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient )  {  }

  getCartItems(): Observable<Cartitem[]>{
    return this.http.get<Cartitem[]>(cartUrl).pipe(
      map((result:any[]) => {
        
        let cartitems: Cartitem[] = [];
        
        for(let item of result){

          let productExists = false

          for(let i in cartitems){
            if(cartitems[i].productId === item.product.id){
              cartitems[i].qty++
              productExists = true
              break;
            } 
        }
        if(!productExists) { 
              cartitems.push(new Cartitem(item.id, item.product));
                }

        }
        
      
        
        
        return  cartitems;
      })
    );
  }

  addProductTocart(product: Product):Observable<any>{
    return this.http.post(cartUrl, { product });
  }

}
