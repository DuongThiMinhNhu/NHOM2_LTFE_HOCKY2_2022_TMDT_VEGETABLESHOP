import {AbsModel} from "./absmodel";
import {JsonModel} from "./jsonmodel";
import {JsonFile} from "../../assets/resources/jsonfile";
import {Cart} from "./cart";
import {CartItem} from "./cart-item";

class List<T> {
}

export class Bill {
    cart:Cart;
    methodPay:string;
    status:string;
    address:string;

    constructor(cart: Cart, methodPay: string, status: string, address: string) {
        this.cart = cart;
        this.methodPay = methodPay;
        this.status = status;
        this.address = address;
    }
    getBillItem():CartItem[]{
        return [...Array.from(this.cart.productList.values())];
    }
}