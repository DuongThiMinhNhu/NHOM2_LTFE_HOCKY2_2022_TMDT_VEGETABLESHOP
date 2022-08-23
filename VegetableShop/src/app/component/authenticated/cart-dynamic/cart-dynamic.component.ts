import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart/cart.service";
import {CartItem} from "../../../models/cart-item";

@Component({
    selector: 'app-cart-dynamic',
    templateUrl: './cart-dynamic.component.html',
    styleUrls: ['./cart-dynamic.component.scss']
})
export class CartDynamicComponent implements OnInit {
    cartService: CartService;
    openCart: boolean;
    clicked: string = '';
    private wasInside = false;

    constructor(private elem: ElementRef) {
        this.cartService = CartService.getInstance();
    }

    getListProductInCart(): CartItem[] {
        return [...Array.from(this.cartService.getCartItem())];
    }

    getSizeCart(): number {
        return this.cartService.sizeOfCart();
    }

    ngOnInit(): void {
    }

    @HostListener('document:click', ['$event'])
    DocumentClick(event: Event) {
        if (this.elem.nativeElement.contains(event.target))
            this.clicked = "inside";
        else
            this.clicked = "outside";
    }

    openCartAction() {
        this.openCart = true;
        if (this.openCart) {
            console.log("mở cart " + this.openCart);
            console.log(this.getListProductInCart().length)
        } else {
            console.log("đóng cart " + this.openCart);
        }
    }

    closeCart() {
        this.openCart = false;
    }
}
