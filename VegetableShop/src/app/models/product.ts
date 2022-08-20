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

    isExpensiveThan(item:Product){
        return this.price>item.price;
    }

    isNewerThan(item:Product){
       let ownUpdateAt = this.parseUpdateAt(this.updatedAt);
       let otherUpdateAt = this.parseUpdateAt(item.updatedAt);
       if(ownUpdateAt==null||otherUpdateAt==null) return false;
       if(otherUpdateAt[0]<ownUpdateAt[0]) return true;
       else if(otherUpdateAt[0]>ownUpdateAt[0]) return false;
       else{
           if(otherUpdateAt[1]<ownUpdateAt[1]) return true;
           else if(otherUpdateAt[1]>ownUpdateAt[1]) return false;
           else{
               if(otherUpdateAt[2]<ownUpdateAt[2]) return true;
               else if(otherUpdateAt[2]>ownUpdateAt[2]) return false;
               else{
                   if(otherUpdateAt[3]<ownUpdateAt[3]) return true;
                   else if(otherUpdateAt[3]>ownUpdateAt[3]) return false;
                   else{
                       if(otherUpdateAt[4]<ownUpdateAt[4]) return true;
                       else if(otherUpdateAt[4]>ownUpdateAt[4]) return false;
                       else {
                           if (otherUpdateAt[5] < ownUpdateAt[5]) return true;
                           else if (otherUpdateAt[5] > ownUpdateAt[5]) return false;
                           else {
                               if (otherUpdateAt[6] < ownUpdateAt[6]) return true;
                               else return otherUpdateAt[6] <= ownUpdateAt[6];
                           }
                       }
                   }
               }
           }
       }
    }

    parseUpdateAt(update:string){
        let temp = update.substring(0,19).split('T');
        let year,month,day,hour,minute,second;
        if(temp.length==2){
            let date = temp[0].split('-');
            if(date.length==3){
                year = date[0];
                month = date[1];
                day = date[2];
            }else return null;

            let time = temp[1].split(':');
            if(time.length==3){
               hour = time[0];
               minute = time[1];
               second = time[2];
            }else return null
            return [year,month,day,hour,minute,second];
        }
      return null;
    }



    public getId(): number {
        return this.id;
    }

    public getQuantity(): number {
        return this.number;
    }

}