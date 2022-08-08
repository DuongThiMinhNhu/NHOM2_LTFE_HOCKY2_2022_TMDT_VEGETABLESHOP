import {JsonModel} from "./jsonmodel";

export interface IModel <T>{
    getInstance(item:T):T;
    isRightId(item:T):T;
    parseStringToInt(value:T);
    getJsonStorage(): JsonModel;

}