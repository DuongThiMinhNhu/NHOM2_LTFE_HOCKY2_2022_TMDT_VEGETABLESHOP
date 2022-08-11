import {AbsModel} from "./absmodel";
import {Product} from "./product";

export class Cart extends AbsModel<Cart> {

    id: number;
    idAccount: number;
    isActive: boolean;
    note: string;
    productList: Map<number, Product>;
    discount: number = 0.01;

    constructor(id?: number, idAccount?: number, isActive?: boolean, note?: string, productList?: Map<number, Product>) {
        super();
        this.id = id;
        this.idAccount = idAccount;
        this.isActive = isActive;
        this.note = note;
        this.productList = productList;
    }

    //put product to cart
    public putProduct(product: Product): void {
        if (this.productList.has(product.getId())) {
            this.upQuantity(product.getId());
        } else {
            this.productList.set(product.getId(), product);
        }

    }

    private upQuantity(id: number): void {
        let product: Product = this.productList.get(id);
        product.setQuantitySold(product.getQuantitySold() + 1);
    }

    //update quantity of product by id
    public updateQuantity(id: number, quantity: number): void {
        let product: Product = this.productList.get(id);
        product.setQuantitySold(quantity);
    }

    public updateQuantitySold(id: number, quantity: number): number {
        let product: Product = this.productList.get(id);
        if (quantity < 1 || quantity > product.getQuantity()) {
            return product.getQuantitySold();
        }
        product.setQuantitySold(quantity);
        return product.getQuantitySold();
    }

    //get product from cart by id
    public getProduct(id: number): Product {
        return this.productList.get(id);
    }

    //remove product from cart by id
    public removeProduct(id: number): boolean {
        return this.productList.delete(id);
    }

//get sub total price of cart
    public getSubTotalPrice(): number {
        let output: number = 0;
        for (let product of this.productList.values()) {
            output += product.getTotalPrice();
        }
        return output;
    }

//get total price of cart
    public getTotalPrice(): number {
        let output: number = this.getSubTotalPrice() + this.getSubTotalPrice() * this.discount;
        return output;
    }

//get total quantity of cart
    public getTotalQuantity(): number {
        let output: number = 0;
        for (let product of this.productList.values()) {
            output += product.getQuantitySold();
        }
        return output;
    }

//get list of product
    public getProductList(): IterableIterator<Product> {
        return this.productList.values();
    }

}