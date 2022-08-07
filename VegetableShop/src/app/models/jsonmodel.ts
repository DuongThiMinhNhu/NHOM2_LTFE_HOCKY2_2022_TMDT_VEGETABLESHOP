import {IModel} from "./imodel";

export class JsonModel<T>{
   key:string;
   value:string;
    constructor(key: string, value: string) {
        this.key = key;
        this.value = value;
    }
}