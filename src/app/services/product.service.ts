import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { productsUrl } from 'src/app/config/api';

//const apiUrl = 'http://localhost:3000/products' 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[]  = [ /*
    new Product(1, 'Tipr', 'Full Sleeve Solid UniSex Hoodies', 400,'https://cdn11.bigcommerce.com/s-1js1zluvaj/images/stencil/1280x1280/products/46158/169704/Mens-Hoodies-and-Sweatshirts-Oversized-for-Spring-Autumn-Men-Hip-Hop-Hooded-Hoodies-Men-Blue-White__82762.1563421670.jpg?c=2'),
    new Product(2,'Alan Jones', 'Full Sleeve Solid Men Hoodies', 550, 'https://cf.shopee.com.my/file/8586d39f277aa5efe93fe6d2aceb793e'),
    new Product(3, 'Campus', 'Full Sleeve Fitable UniSex Hoodies', 700,'https://waliicorners.com/wp-content/uploads/2019/11/SingleRoad-Mens-Hoodies-Autumn-Sweatshirts-Male-Hip-Hop-Japanese-Streetwear-Harajuku-Print-Black-Hoodie-Sweatshirt-Men.jpg'),
    new Product(4, 'Smartees', 'Full Sleeve Good Men Hoodies', 800,'https://i.pinimg.com/originals/02/bc/eb/02bceb3909b7602d8d21ca247280e6d1.jpg'),
    new Product(5, 'ADRO', 'Full Sleeve Hoodies Combo set', 900,'https://i2.wp.com/ecollecxion.co.uk/wp-content/uploads/2020/07/Mens-Hoodies-sweatshirt-Mazda-Car-Logo-Printed-Spring-Autumn-Hoodies-Pants-2Pcs-Sporting-suit-Fleece-Warm.jpg?fit=748%2C727&ssl=1'),
    new Product(6, 'Genius', 'Full Sleeve Fit And Fine Hoodies', 950,'https://ae01.alicdn.com/kf/Hdf6c2ff6c2734e95ab866feb859418a3c/SingleRoad-Mens-Hoodies-Men-Colorblock-Casual-Patchwork-Hoodie-Man-Japanese-Streetwear-Hip-Hop-Male-Yellow-Hoodie.jpg'),
    new Product(7, 'Goodtry', 'Full Sleeve Men/Women Hoodies', 850,'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/98/531331/1.jpg?7898')    
*/
  ]
  
  constructor(private http: HttpClient) {  }

    getProducts():Observable<Product[]> {
      
      return this.http.get<Product[]>(productsUrl);

      //return this.http.get<Product[]>(apiUrl);
    }

    /*
    getProducts():Product[]{
      return this.Products
    }
    */
}