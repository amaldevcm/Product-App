import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CommonService {
    data = [
        {
            id: 1,
            name: 'Product 1',
            price: 10,
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium assumenda doloremque asperiores ratione enim voluptatem magnam ad, voluptates repellat culpa at, laboriosam consectetur eum officia dicta, a et ipsa dolore."
        }, {
            id: 2,
            name: 'Product 2',
            price: 20,
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium assumenda doloremque asperiores ratione enim voluptatem magnam ad, voluptates repellat culpa at, laboriosam consectetur eum officia dicta, a et ipsa dolore."
        }, {
            id: 3,
            name: 'Product 3',
            price: 310,
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium assumenda doloremque asperiores ratione enim voluptatem magnam ad, voluptates repellat culpa at, laboriosam consectetur eum officia dicta, a et ipsa dolore."
        }, {
            id: 4,
            name: 'Product 4',
            price: 140,
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium assumenda doloremque asperiores ratione enim voluptatem magnam ad, voluptates repellat culpa at, laboriosam consectetur eum officia dicta, a et ipsa dolore."
        }, {
            id: 5,
            name: 'Product 5',
            price: 105,
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium assumenda doloremque asperiores ratione enim voluptatem magnam ad, voluptates repellat culpa at, laboriosam consectetur eum officia dicta, a et ipsa dolore."
        }
    ];

    getAllProducts(){
        return this.data;
    }
}