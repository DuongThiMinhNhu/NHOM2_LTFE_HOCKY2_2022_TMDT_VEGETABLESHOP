import {AbsModel} from "./absmodel";
import {Product} from "./product";
import {CartItem} from "./cart-item";

export class Cart extends AbsModel<Cart> {
    id: number;
    idAccount: number;
    isActive: boolean;
    note: string;
    productList: Map<number, CartItem>;
    discount: number = 0.01;

    constructor(id?: number, idAccount?: number, isActive?: boolean, note?: string) {
        super();
        this.id = id;
        this.idAccount = idAccount;
        this.isActive = isActive;
        this.note = note;
        this.productList = new Map<number, CartItem>();
    }

    public addProductToCart(product: Product): void {
        let id = product.id;
        if (this.productList.has(id)) {
            this.upQuantity(id);
        } else {
            this.productList.set(id, new CartItem(product, 1));
        }
    }

    public getSale(product: Product): number {
        let id = product.id;
        let output = 0.0;
        if (this.productList.has(id)) {
            output = product.price - (product.price * 0.01)
        }
        return output;
    }

    public upQuantity(id: number): boolean {
        let cartItem = this.productList.get(id);
        if (cartItem == null) return false;
        cartItem.quantity += 1;
        if (cartItem.hasMoreProducts()) {
            return true;
        } else {
            cartItem.quantity -= 1;
            return false;
        }
    }

    public downQuantity(id: number): boolean {
        let cartItem = this.productList.get(id);
        if (cartItem == null) return false;
        cartItem.quantity -= 1;
        if (cartItem.hasMoreProducts()) {
            if (cartItem.quantity < 1) {
                this.removeProduct(id);
            }
            return true;
        } else {
            cartItem.quantity += 1;
            return false;
        }
    }

    //update quantity of product by id
    public upQuantitySpecific(id: number, quantity: number): boolean {
        let cartItem = this.productList.get(id);
        if (cartItem == null) return false;
        let old_quantity = cartItem.quantity;
        cartItem.quantity = quantity;
        if (cartItem.hasMoreProducts() && quantity >= 1) {
            return true;
        } else {
            cartItem.quantity = old_quantity;
            return false;
        }
    }

    //get product from cart by id
    public getProduct(id: number): Product {
        return this.productList.get(id).product;
    }

    public sizeCart(): number {
        return this.productList.size;
    }

    //remove product from cart by id
    public removeProduct(id: number): boolean {
        return this.productList.delete(id);
    }

    public getTotalPrice(): number {
        let output = 0.0;
        for (let product of this.productList.values()) {
            output += product.getTotalPrice();
        }
        return output;
    }

    public getDetailSize(): number {
        let output = 0.0;
        for (let product of this.productList.values()) {
            output += product.quantity;
        }
        return output;
    }

//get total quantity of cart
    public getTotalPriceAndDiscount(): number {
        let output: number = 0;
        for (let cartItem of this.productList.values()) {
            output += cartItem.getTotalPrice() - cartItem.getTotalPrice() * this.discount;
        }
        return output;
    }


}