import { Component, Input } from "@angular/core";

@Component({
    selector: 'prod-details',
    templateUrl: './productDetail.component.html',
    standalone: false,
})

export class ProductDetailComponent {
    @Input() data = {
        name: '',
        price: 0,
        description: ''
    }

    constructor() {}
}