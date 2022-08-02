export class Product{
    id: Number;
    name: String;
    price: Number;
    image: String;
    description: String;
    id_type: String;
    grams: Number;
    number: Number;
    updated_at: String;

    constructor(id: Number, name: String, price: Number, image: String, description: String, id_type: String, grams: Number, number: Number, updated_at: String) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
        this.id_type = id_type;
        this.grams = grams;
        this.number = number;
        this.updated_at = updated_at;
    }

//    id : number;
 //   name :  string;
 //   price : number;
  //  description : string;
    // category : Category;
  //  image : [];

}