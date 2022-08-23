import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../../../services/cart/cart.service";
import {Product} from "../../../../models/product";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
    @Input() product: Product;
    cartService: CartService;

    constructor(private http:HttpClient) {
        this.cartService = CartService.getInstance(http);
    }

    ngOnInit(): void {
    }

    addToCart() {
        this.cartService.addToCart(this.product);
    }

}
