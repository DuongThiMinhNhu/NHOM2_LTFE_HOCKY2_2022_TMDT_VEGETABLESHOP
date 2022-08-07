import {Inject, Injectable} from '@angular/core';
import {catchError, Observable, retry, throwError} from "rxjs";
import {LocalHost} from "../../../assets/resources/localhost";
import {map} from "rxjs/operators";
import {HttpClient, HttpParams} from "@angular/common/http";
import {IModel} from "../../models/imodel";
import {Product} from "../../models/product";
import {AbsModel} from "../../models/absmodel";
import {IServices} from "../iservices";

@Injectable({
    providedIn:"root"
})
export class HandleJsonService<T> implements IServices<T>{
   private static instance ;
   private url:string;
   constructor(private httpClient:HttpClient,@Inject(AbsModel) private model:IModel<T>) {
       this.url = `${LocalHost.URL}/${this.model.getJsonStorage().value}`;
   }

    public static getInstance<T>(httpClient:HttpClient,model:IModel<T>){
       if(this.instance == null) this.instance = new HandleJsonService(httpClient,model);
       return this.instance;
    }
    public count(): Observable<number> {
        let keyJson = this.model.getJsonStorage().key;
        return this.httpClient.get(this.url).pipe(
            map(res => {
               return res[keyJson].length;
            }),
            catchError((err, caught) => {
                return this.handleError(err.error);
            }),
        )
    }
  public doGet(): Observable<T[]> {
    let keyJson = this.model.getJsonStorage().key;
    return this.httpClient.get(this.url).pipe(
        map(res => {
          return res[keyJson].map(item => {
            return this.model.getInstance(item);
          })
        }),
        catchError((err, caught) => {
          return this.handleError(err.error);
        }),
    )
  }
    public doGetPaging(page:number,limit:number): Observable<T[]> {
        let keyJson = this.model.getJsonStorage().key;
        let params = new HttpParams();
        params = params.set("limit",limit);
        params = params.set("limit",limit);
        return this.httpClient.get(this.url).pipe(
            map(res => {
                return res[keyJson].map(item => {
                    return this.model.getInstance(item);
                })
            }),
            catchError((err, caught) => {
                return this.handleError(err.error);
            }),
        )
    }

    public doGetById(id:string): Observable<T> {
        return this.httpClient.get(this.url+id).pipe(
            retry(3),
            catchError<T,Observable<T>>((err, caught) => {
                return this.handleError(err.error);
            }),
        );
    }

  public doDelete(id:string):void{
      let params = new HttpParams();
      params = params.append('id', id);
        this.httpClient.delete(this.url,{params:params}).pipe(
            map(res=>{
                console.log(res);
            })
        )
  }

  public doUpdate(t:T):void{

  }

  public doInsert(t:T):Observable<T>{
      return this.httpClient.post(this.url,t).pipe<T>(
          catchError<T,Observable<T>>((err, caught) => {
              return this.handleError(err);
          })
  )
  }


  private handleError(error) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}