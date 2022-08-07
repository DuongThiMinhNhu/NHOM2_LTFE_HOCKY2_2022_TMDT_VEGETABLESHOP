import {JsonModel} from "./jsonmodel";

export interface IModel <T>{
    getInstance(item:any):T;
    parseStringToInt(value:any);
    getJsonStorage(): JsonModel;

}