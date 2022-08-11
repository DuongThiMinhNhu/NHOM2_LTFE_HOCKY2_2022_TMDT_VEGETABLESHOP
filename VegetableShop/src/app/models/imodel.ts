import {JsonModel} from "./jsonmodel";
import {JsonFile} from "../../assets/resources/jsonfile";

export interface IModel <T>{
    getInstance(item:T):T;
    isRightId(item:T,id:string):boolean;
    isRightName(item:T,name:string):boolean;
    parseStringToInt(value:T);

    getJsonStorage(): JsonModel;
}