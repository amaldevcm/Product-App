import { Component, OnInit } from "@angular/core";
import { CommonService } from "../../Services/common.service";
import { Router } from "@angular/router";

@Component({
    selector: 'prod-list',
    templateUrl: './productList.component.html',
    standalone: false
})

export class ProductListComponent implements OnInit{
    allProducts = Array();
    selectedProduct = null;

    constructor(service: CommonService, private router: Router) {
        this.allProducts = service.getAllProducts();
    }

    ngOnInit(): void { 
    }

    showDetails(productId: Number) {
        this.router.navigate(['/profile', productId])
    }
}