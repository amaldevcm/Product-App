import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './Components/ProductCard/productCard.component';
import { ProductDetailComponent } from './Components/ProductDetails/productDetail.component';
import { ProductListComponent } from './Components/ProductList/productList.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductDetailComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
