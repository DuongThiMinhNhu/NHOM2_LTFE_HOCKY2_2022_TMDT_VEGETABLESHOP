import {AbsModel} from "./absmodel";
import {JsonModel} from "./jsonmodel";
import {JsonFile} from "../../assets/resources/jsonfile";

export class Category extends AbsModel<Category>{
    id:string;
    name:string;
    description:string;
    imageSrc:string;
    active: boolean;

    constructor(id?: string, name?: string, description?: string,imageSrc?: string, active?: boolean) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageSrc = imageSrc;
        this.active = active;
    }

    getInstance(item: Category): Category {
        return new Category(
            item.id,
            item.name,
            item.description,
            item.imageSrc,
            item.active,
        );
    }

    getJsonStorage(): JsonModel {
        return new JsonModel("categories",JsonFile.CATEGORIES);
    }

    isRightId(item: Category, id: string): boolean {
        return item.id == id;
    }

    isRightName(item: Category, name: string): boolean {
        return item.name.includes(name);
    }

}