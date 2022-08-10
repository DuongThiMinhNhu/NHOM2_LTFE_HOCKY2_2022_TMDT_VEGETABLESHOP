import {AbsModel} from "./absmodel";
import {JsonModel} from "./jsonmodel";

export class Post extends AbsModel<Post>{
    id:number;
    title:string;
    image:string;
    author:string;
    date:string;
    content:string;

    constructor(id?: number, title?: string, image?: string, author?: string, date?: string, content?: string) {
        super();
        this.id = id;
        this.title = title;
        this.image = image;
        this.author = author;
        this.date = date;
        this.content = content;
    }


    getInstance(item: Post): Post {
        return new Post(
            super.parseStringToInt(item.id),
            item.title,
            item.image,
            item.author,
            item.date,
            item.content,
        );
    }

    getJsonStorage(): JsonModel {
        return new JsonModel("posts","");
    }
}
