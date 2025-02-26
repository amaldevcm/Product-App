import { Component, Input } from "@angular/core";

@Component({
    templateUrl: './productDetail.component.html',
    imports: []
})

export class ProductDetail {
    @Input() data = {
        name: '',
        price: 0,
        description: ''
    }

    constructor() {}
}