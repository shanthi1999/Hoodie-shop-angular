import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule,/*routingcomponents*/} from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { FiltersComponent } from './sidebar/filters/filters.component';
import { ProductlistComponent } from './sidebar/productlist/productlist.component';
import { CartComponent } from './sidebar/cart/cart.component';
import { CartitemsComponent } from './sidebar/cart/cartitems/cartitems.component';
import { ProductitemsComponent } from './sidebar/productlist/productitems/productitems.component';
import { ProductService } from './services/product.service';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    //routingcomponents,
    FooterComponent,
    NavComponent,
    FiltersComponent,
    ProductlistComponent,
    CartComponent,
    CartitemsComponent,
    ProductitemsComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

