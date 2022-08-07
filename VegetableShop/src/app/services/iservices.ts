import {Observable} from "rxjs";

export interface IServices<T>{
     count(): Observable<number>;
     doGet(): Observable<T[]> ;
     doGetPaging(page:number,limit:number): Observable<T[]> ;

     doGetById(id:string): Observable<T> ;

     doDelete(id:string):void;

     doUpdate(t:T):void;
     doInsert(t:T):Observable<T>;

}
