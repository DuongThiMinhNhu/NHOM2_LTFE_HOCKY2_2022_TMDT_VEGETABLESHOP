import {Component, Input, OnInit} from '@angular/core';
import {CartItem} from "../../../../models/cart-item";

@Component({
    selector: 'app-cart-item-mini',
    templateUrl: './cart-item-mini.component.html',
    styleUrls: ['./cart-item-mini.component.scss']
})
export class CartItemMiniComponent implements OnInit {
    @Input() cartItem: CartItem;

    constructor() {
    }

    ngOnInit(): void {
    }

    upQuantity() {
        this.cartItem.quantity++;
    }

    downQuantity() {
        this.cartItem.quantity--;
    }

    specificQuantity(event) {
        this.cartItem.quantity = event.target.value;
        console.log(this.cartItem.quantity);
    }
}
