import {AbsModel} from "./absmodel";
import {JsonModel} from "./jsonmodel";

export class Post extends AbsModel<Post>{
    id:number;
    title:string;
    image:string;
    author:string;
    date:string;
    content:string;
    postUrl:string;

    constructor(id?: number, title?: string, image?: string, author?: string, date?: string, content?: string, postUrl?: string) {
        super();
        this.id = id;
        this.title = title;
        this.image = image;
        this.author = author;
        this.date = date;
        this.content = content;
        this.postUrl = postUrl;
    }


    getInstance(item: Post): Post {
        return new Post(
            super.parseStringToInt(item.id),
            item.title,
            item.image,
            item.author,
            item.date,
            item.content,
            item.postUrl
        );
    }

    getJsonStorage(): JsonModel {
        return new JsonModel("posts","");
    }
}
