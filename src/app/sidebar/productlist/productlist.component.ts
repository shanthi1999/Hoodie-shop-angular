import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  
  productList: Product[] = []
  
  constructor(private productService: ProductService ) { }

  ngOnInit() {

      this.productService.getProducts().subscribe((products) => {
          this.productList = products;
      })

      //console.log(this.productService.getProducts())
      //this.productList = this.productService.getProducts()
  }
}
