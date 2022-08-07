export interface ModelCommon <T>{
    getInstance(item:any):T;
     parseStringToInt(value:any){
    if(typeof value == "string") return parseInt(value);
    else if (typeof value == "number") return value;
    else return  -1;
}
}