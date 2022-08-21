import {Injectable} from '@angular/core';
import {Cart} from "../../models/cart";
import {ISessionServices} from "../isession.services";
import {Product} from "../../models/product";
import {SessionKey} from "../../../assets/resources/sessionkey";
import {CartItem} from "../../models/cart-item";

@Injectable({
    providedIn: 'root'
})
export class CartService implements ISessionServices<Cart> {
    private static cart: Cart;
    private static cartService: CartService;

    public static getInstance() {
        if (this.cartService == null) this.cartService = new CartService();
        this.initCart();
        return this.cartService;
    }

    constructor() {
        CartService.cart = this.getFromSession();
    }

    private static initCart() {
        if (CartService.cart == null) {
            CartService.cart = new Cart();
        }
        return CartService.cart;
    }

    public addToCart(product: Product) {
        CartService.cart.addProductToCart(product);
    }

    public sizeOfCart(): number {
        return CartService.cart.getDetailSize();
    }

    getFromSession(): Cart {
        let cartJson = sessionStorage.getItem(this.getSessionKey());
        return JSON.parse(cartJson);
    }

    saveToSession(): void {
        sessionStorage.setItem(this.getSessionKey(), JSON.stringify(CartService.cart));
    }

    removeFromSession(): void {
        sessionStorage.removeItem(this.getSessionKey())
    }

    getSessionKey(): string {
        return SessionKey.CART;
    }

    public upQuantity(id: number): boolean {
        return CartService.cart.upQuantity(id);
    }

    public downQuantity(id: number): boolean {
        return CartService.cart.downQuantity(id);
    }

    public upQuantitySpecific(id: number, quantity: number): boolean {
        return CartService.cart.upQuantitySpecific(id, quantity);
    }

    public getProduct(id: number): Product {
        return CartService.cart.getProduct(id);
    }

    public removeProduct(id: number): boolean {
        return CartService.cart.removeProduct(id);
    }

    public getTotalPrice(): number {
        return CartService.cart.getTotalPrice();
    }

    public getTotalPriceAndDiscount(): number {
        return CartService.cart.getTotalPriceAndDiscount();
    }

    public getCartItem(): IterableIterator<CartItem> {
        return CartService.cart.productList.values();
    }

}
