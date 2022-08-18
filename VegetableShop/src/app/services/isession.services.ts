import {Observable} from "rxjs";

export interface ISessionServices<T>{
     getSessionKey():string;
     saveToSession():void;
     getFromSession():T;
     removeFromSession():void;
}
