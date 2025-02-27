import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './Components/ProductCard/productCard.component';
import { ProductDetailComponent } from './Components/ProductDetails/productDetail.component';
import { ProductListComponent } from './Components/ProductList/productList.component';
import { CommonService } from './Services/common.service';

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
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ CommonService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
