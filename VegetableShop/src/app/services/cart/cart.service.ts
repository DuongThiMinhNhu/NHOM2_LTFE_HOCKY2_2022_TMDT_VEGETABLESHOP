import {Injectable} from '@angular/core';
import {Cart} from "../../models/cart";
import {ISessionServices} from "../isession.services";
import {Product} from "../../models/product";
import {SessionKey} from "../../../assets/resources/sessionkey";
import {CartItem} from "../../models/cart-item";
import {TaxService} from "../tax/tax.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tax} from "../../models/tax";

@Injectable({
    providedIn: 'root'
})
export class CartService implements ISessionServices<Cart> {
    private static cart: Cart;
    private static cartService: CartService;
    taxService:TaxService;
    tax:Observable<Tax>;
    public static getInstance(http:HttpClient) {
        if (this.cartService == null) this.cartService = new CartService(http);
        this.initCart();
        return this.cartService;
    }

    constructor(private http:HttpClient) {
        this.taxService = TaxService.getInstance(http);
        CartService.cart = this.getFromSession();
        if( CartService.cart !=null){
            let cartNew = new Cart();
            cartNew.productList = CartService.cart.productList;
            CartService.cart = cartNew;
            this.getShippingByWeight();
        }else{
            CartService.cart = new Cart();
            this.getShippingByWeight();
        }
    }

    private static initCart() {
        if (CartService.cart == null) {
            CartService.cart = new Cart();
        }
        return CartService.cart;
    }
    static getCart() {
        return this.cart;
    }

    public addToCart(product: Product) {
        CartService.cart.addProductToCart(product);
        this.saveToSession();
    }

    public sizeOfCart(): number {
        return CartService.cart.getDetailSize();
    }

    getFromSession(): Cart {
        let cartJson = sessionStorage.getItem(this.getSessionKey());
        if(cartJson!=null){
            let cartReal = JSON.parse(cartJson);
            if(cartReal!=null){
                let productList = JSON.parse(cartReal.productList);
                let mapCartItem = new Map<number,CartItem>();
                for(let i = 0;i<productList.length;i++){
                    let productTemp = JSON.parse(productList[i].product);
                    let product = new Product(productTemp.id,productTemp.name,productTemp.price,productTemp.image,
                        productTemp.description,productTemp.idType,productTemp.idCollection,productTemp.grams,
                        productTemp.number,productTemp.updatedAt);
                    let cartItem = new CartItem(product,productList[i].quantity);
                    mapCartItem.set(cartItem.product.id,cartItem);
                }
                cartReal.productList = mapCartItem;
                return cartReal as Cart;
            }
        }
        return null;
    }

    saveToSession(): void {
        sessionStorage.setItem(this.getSessionKey(), JSON.stringify(CartService.cart.toParser()));
    }

    removeFromSession(): void {
        sessionStorage.removeItem(this.getSessionKey())
    }

    getSessionKey(): string {
        return SessionKey.CART;
    }

    public upQuantity(id: number): boolean {
        let check =  CartService.cart.upQuantity(id);
        this.saveToSession();
        this.getShippingByWeight();
        return check;
    }

    public downQuantity(id: number): boolean {
        let check =  CartService.cart.downQuantity(id);
        this.saveToSession();
        this.getShippingByWeight();
        return check;
    }

    public upQuantitySpecific(id: number, quantity: number): boolean {
        let check =  CartService.cart.upQuantitySpecific(id, quantity);
        this.saveToSession();
        this.getShippingByWeight();
        return check;
    }

    public getProduct(id: number): Product {
        return CartService.cart.getProduct(id);
    }

    public removeProduct(id: number): boolean {
        let check =  CartService.cart.removeProduct(id);
        this.saveToSession();
        this.getShippingByWeight();
        return check;
    }

    public getTotalPrice(): number {
        return CartService.cart.getTotalPrice();
    }

    public getTotalPriceAndDiscount(): number {
        return CartService.cart.getTotalPriceAndDiscount();
    }

    public getCartItem(): CartItem[] {
        return [...Array.from(CartService.cart.productList.values())];
    }
    weightCart(){
        return CartService.cart.weightCart();
    }
    getShippingByWeight(){
        let weight = this.weightCart();
        if(weight<1000) {
            this.taxService.doGetById("1000").then(
                re=>{
                    if(re!=null)  this.tax = re;
                }
            )
        }else if(weight<10000){
            this.taxService.doGetById("10000").then(
                re=>{
                    if(re!=null)
                        this.tax = re;
                }
            )
        }else if(weight<20000){
            this.taxService.doGetById("20000").then(
                re=>{
                    if(re!=null)
                        this.tax = re;
                }
            )
        }else if(weight>=20000){
            this.taxService.doGetById("30000").then(
                re=>{
                    if(re!=null)
                        this.tax = re;
                }
            )
        }
    }
}
