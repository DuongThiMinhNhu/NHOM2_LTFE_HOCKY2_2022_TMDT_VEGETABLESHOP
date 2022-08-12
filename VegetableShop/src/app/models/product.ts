import {AbsModel} from "./absmodel";
import {JsonModel} from "./jsonmodel";
import {JsonFile} from "../../assets/resources/jsonfile";

export class Product extends AbsModel<Product>{
    id:number;
    name: string;
    price: number;
    image:string;
    description:string;
    idType :number;
    idCollection:string;
    grams: number;
    number:number;
    updatedAt:any;
    quantitySold: number = 1;

    constructor(id?: number, name?: string, price?: number, image?: string, description?: string, idType?: number, idCollection?: string, grams?: number, number?: number, updatedAt?: any) {
        super();
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
        this.idType = idType;
        this.idCollection = idCollection;
        this.grams = grams;
        this.number = number;
        this.updatedAt = updatedAt;
    }

    getInstance(item: Product): Product {
        return new Product(
            super.parseStringToInt(item.id),
            item.name,
            super.parseStringToInt(item.price),
            item.image,
            item.description,
            super.parseStringToInt(item.idType),
            item.idCollection,
            super.parseStringToInt(item.grams),
            super.parseStringToInt(item.number),
            item.updatedAt
        );
    }

    getJsonStorage(): JsonModel{
        return new JsonModel ("products",JsonFile.PRODUCTS);
    }

    isRightId(item: Product,id:string): boolean {
        return item.id.toString()==id;
    }

    isRightName(item: Product, name: string): boolean {
        return item.name.toLocaleLowerCase().includes(name);
    }

    //get total price
    public getTotalPrice(): number{
        return this.quantitySold * this.price ;
    }

    public getQuantitySold(): number {
        return this.quantitySold;
    }

    public setQuantitySold(quantitySold: number): void {
        this.quantitySold = quantitySold;
    }

    public getId(): number {
        return this.id;
    }

    public getQuantity(): number {
        return this.number;
    }
}