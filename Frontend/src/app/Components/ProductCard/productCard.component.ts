import { Component, Input, Output } from "@angular/core";
import { ProductList } from "../ProductList/productList.component";
import { ProductDetail } from "../ProductDetails/productDetail.component";

@Component({
    templateUrl: './ProductCard.component.html',
    standalone: true,
    imports: [ProductList, ProductDetail]
})

export class ProductCard {
    @Input() data = []
    @Output() selectedProduct = {}

    constructor() {
        
    }
}