import {Observable} from "rxjs";

export interface IServices<T>{
     count(): Promise<Observable<number>>;
     doGet(): Promise<Observable<T[]>> ;
     doGetPaging(page:number,limit:number): Promise<Observable<T[]>> ;

     doGetById(id:string): Promise<Observable<T>> ;

     doDelete(id:string):Promise<void>;

     doUpdate(t:T):Promise<void>;
     doInsert(t:T):Promise<Observable<T>>;
     doGetByName(name:string): Promise<Observable<T[]>>;
}
