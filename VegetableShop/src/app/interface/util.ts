import {HttpClient, HttpClientModule,HttpClientJsonpModule, HttpParams} from "@angular/common/http";
import {catchError, Observable, ObservableInput, throwError} from "rxjs";
import {map, tap} from "rxjs/operators";
import {Injectable} from "@angular/core";
import { Product } from "../models/product";
import {SearchItem} from "./search";

@Injectable({
    providedIn: 'root'
})
export class Util<T>{
    result: Observable<Product[]>;
    constructor(private httpClient:HttpClient) {
    }
    public parseStringToInt(value:any){
        if(typeof value == "string") return parseInt(value);
        else if (typeof value == "number") return value;
        else return  -1;
    }
    // public static convertObject2ProArr(items: Object,arr: Product[] | undefined, category :string){
    //     if (isArray(items)){
    //         for (let p_item of items){
    //             // @ts-ignore
    //             let product = new Product(p_item.name,
    //                     this.parseString2Int(p_item.price),
    //                 p_item.image,p_item.description);
    //
    //         }
    //     }
    // }
    public convertJsonToObject(apiUrl:string,options:HttpParams,callback='callback'):Observable<Product[]>{
        // options.params is an HttpParams object
        const params = options.toString();
        let url = params.length==0?`${apiUrl}`:`${apiUrl}?${params}`;
        console.log(url);
        //"https://itunes.apple.com/search?term=love&media=music&limit=20"
        return this.httpClient.jsonp(url,callback).pipe(
            map(res =>{
                console.log("res");
                console.log(res["products"]);
              //  return res;
                // console.log(res+" ---");
                return res[0].map(item=> {
                    console.log(item+" ---");
                        return new Product(
                                item.id,
                                item.name,
                            this.parseStringToInt(item.price),
                                item.image,
                                item.description,
                                item.id_type,
                            this.parseStringToInt(item.grams),
                            this.parseStringToInt(item.number),
                                item.updated_at,
                            )
                    // new SearchItem(
                    //     item.trackName,
                    //     item.artistName,
                    //     item.trackViewUrl,
                    //     item.artworkUrl30,
                    //     item.artistId
                    // );
                    }
                )
            }),
            catchError((err,caught) => {
                return this.handleError(err.error);
            }),

        );
        // console.log(this.result);
        // console.log("hello");
        // return this.result;
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
