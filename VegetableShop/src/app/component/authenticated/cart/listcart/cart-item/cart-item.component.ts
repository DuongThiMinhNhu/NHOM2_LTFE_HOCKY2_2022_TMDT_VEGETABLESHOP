import {Component, Input, OnInit} from '@angular/core';
import {CartItem} from "../../../../../models/cart-item";
import {CartService} from "../../../../../services/cart/cart.service";

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
    @Input() cartItem: CartItem;
    cartService:CartService;
    constructor() {
        this.cartService = CartService.getInstance();
    }
    upQuantity() {
        this.cartService.upQuantity(this.cartItem.product.id);
    }

    downQuantity() {
        this.cartService.downQuantity(this.cartItem.product.id);
    }

    specificQuantity(event) {
        if (this.cartItem.quantity > 0) {
            this.cartService.upQuantitySpecific(this.cartItem.product.id,event.target.value);
        }
        this.cartService.upQuantitySpecific(this.cartItem.product.id,1);
    }

    ngOnInit(): void {
    }

    removeItem(): void {
        this.cartService.removeProduct(this.cartItem.product.id);
    }

}
