import {IModel} from "./imodel";
import {JsonModel} from "./jsonmodel";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn:"root"
})
export abstract class AbsModel <T> implements IModel<T>{

    parseStringToInt(value: any) {
        if(typeof value == "string") return parseInt(value);
        else if (typeof value == "number") return value;
        else return  -1;
    }

     getInstance(item: any): T {
        return undefined;
     };

     getJsonStorage(): JsonModel{
         return undefined;
     };

}