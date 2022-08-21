import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart/cart.service";
import {CartItem} from "../../../models/cart-item";
import {BannerStorage} from "../../../../assets/resources/bannerstorage";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
    namePage = BannerStorage.CART.name;
    imageBg = BannerStorage.CART.image;
    cartService: CartService;

    constructor() {
        this.cartService = CartService.getInstance();
    }

    ngOnInit(): void {
    }

    getListProductInCart(): CartItem[] {
        return [...Array.from(this.cartService.getCartItem())];
    }

    getSizeCart(): number {
        return this.cartService.sizeOfCart();
    }
}
