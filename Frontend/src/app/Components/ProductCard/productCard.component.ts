import { Component, Input, Output } from "@angular/core";
import { ProductListComponent } from "../ProductList/productList.component";
import { ProductDetailComponent } from "../ProductDetails/productDetail.component";

@Component({
    templateUrl: './ProductCard.component.html',
    standalone: false,
})

export class ProductCardComponent {
    @Input() data = []
    @Output() selectedProduct = {}

    constructor() {
        
    }
}