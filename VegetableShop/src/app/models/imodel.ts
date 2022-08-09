import {JsonModel} from "./jsonmodel";

export interface IModel <T>{
    getInstance(item:T):T;
    isRightId(item:T,id:string):boolean;
    parseStringToInt(value:T);
    getJsonStorage(): JsonModel;

}