import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'prod-card',
    templateUrl: './ProductCard.component.html',
    standalone: false,
})

export class ProductCardComponent {
    @Input() data = {
        id: -1,
        name: null,
        price: 0,
        description: null
    }
    @Output() cardOnClick = new EventEmitter<any>();

    constructor() {
        
    }

    onClick() {
        this.cardOnClick.emit(this.data.id);
    }
}