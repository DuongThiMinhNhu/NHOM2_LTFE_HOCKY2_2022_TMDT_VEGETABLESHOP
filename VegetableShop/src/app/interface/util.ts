import {Product} from "./product";
import {isArray} from "util";

export class Util{
    public static parseString2Int(value:any){
        if(typeof value == "string") return parseInt(value);
        else if (typeof value == "number") return value;
        else return  0;
    }
    public static convertObject2ProArr(items: Object,arr: Product[] | undefined, category :string){
        if (isArray(items)){
            for (let p_item of items){
                // @ts-ignore
                let product = new Product(p_item.name,
                        this.parseString2Int(p_item.price),
                    p_item.image,p_item.description);

            }
        }
    }
}