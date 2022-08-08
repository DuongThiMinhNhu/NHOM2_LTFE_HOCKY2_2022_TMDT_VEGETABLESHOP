import {AbsModel} from "./absmodel";
import {JsonModel} from "./jsonmodel";
import {JsonFile} from "../../assets/resources/jsonfile";

export class Category extends AbsModel<Category>{
    id:string;
    name:string;
    description:string;
    active: boolean;

    constructor(id?: string, name?: string, description?: string, active?: boolean) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
        this.active = active;
    }

    getInstance(item: Category): Category {
        return new Category(
            item.id,
            item.name,
            item.description,
            item.active,
        );
    }

    getJsonStorage(): JsonModel {
        return new JsonModel("categories",JsonFile.CATEGORIES);
    }
}