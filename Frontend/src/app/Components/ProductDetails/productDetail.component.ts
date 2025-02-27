import { Component, Input, OnInit } from "@angular/core";
import { CommonService } from "../../Services/common.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'prod-details',
    templateUrl: './productDetail.component.html',
    standalone: false,
})

export class ProductDetailComponent implements OnInit{
    allProducts = Array();
    productId: any = null;
    selectedProduct = {
        name: null,
        price: null,
        description: null
    };
    
    constructor(private service: CommonService, private route: ActivatedRoute) {    }

    ngOnInit(): void {
        this.productId = this.route.snapshot.paramMap.get('id');
        this.allProducts = this.service.getAllProducts();

        this.selectedProduct = this.allProducts.find((product) => product.id == this.productId);
        console.log(this.productId, this.selectedProduct);
    }

    

}