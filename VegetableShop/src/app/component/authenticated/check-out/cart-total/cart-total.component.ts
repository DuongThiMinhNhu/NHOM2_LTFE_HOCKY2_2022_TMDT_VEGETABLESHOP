import {Component, OnInit} from '@angular/core';
import {Cart} from "../../../../models/cart";
import {SessionKey} from "../../../../../assets/resources/sessionkey";
import {Account} from "../../../../models/account";

@Component({
    selector: 'app-cart-total',
    templateUrl: './cart-total.component.html',
    styleUrls: ['./cart-total.component.scss']
})
export class CartTotalComponent implements OnInit {
    cart: Cart;


    constructor() {
        this.cart = JSON.parse(sessionStorage.getItem(SessionKey.CART));
        console.log(this.cart)
    }

    ngOnInit(): void {
    }

}
