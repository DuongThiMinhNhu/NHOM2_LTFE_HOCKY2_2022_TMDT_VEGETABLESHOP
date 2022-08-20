import {AbsModel} from "./absmodel";
import {Product} from "./product";

export class CartItem extends AbsModel<CartItem> {
     product:Product;
     quantity:number;

    constructor(product: Product, quantity: number) {
        super();
        this.product = product;
        this.quantity = quantity;
    }

//get total price of cart
    public getTotalPrice(): number {
       return (this.product.price - (this.product.price*0.1)) *this.quantity;
    }
    public getSale(): number {
        return (this.product.price - (this.product.price*0.01));
    }
    public hasMoreProducts(){
        return this.product.number>0&&this.product.number>=this.quantity;
    }

}