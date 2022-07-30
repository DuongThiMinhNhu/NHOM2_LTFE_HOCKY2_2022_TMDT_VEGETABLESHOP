import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, Observable, ObservableInput, throwError} from "rxjs";
import {mapEntry} from "@angular/compiler/src/output/map_util";

export class Util<T>{
    result: Observable<T[]>;
    constructor(private httpClient:HttpClient) {
    }
    public static parseStringToInt(value:any){
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
    public convertJsonToObject(apiUrl:string,options:HttpParams,callback='callback'):Observable<T[]>{
        // options.params is an HttpParams object
        const params = options.toString();
        this.result = this.httpClient.jsonp<T[]>(`${apiUrl}?${params}`,callback).pipe<T[]>(
            data => {
                    return data;
                }
        );
        console.log("hello");
        return this.result;
    }
    private handleError(error: HttpErrorResponse) {
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
