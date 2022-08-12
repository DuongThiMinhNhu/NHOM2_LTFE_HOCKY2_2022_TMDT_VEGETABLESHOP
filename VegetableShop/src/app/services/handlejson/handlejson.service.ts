import {Inject, Injectable} from '@angular/core';
import {
    catchError,
    lastValueFrom,
    Observable,
    throwError
} from "rxjs";
import {LocalHost} from "../../../assets/resources/localhost";
import {filter, map, skip, take} from "rxjs/operators";
import {HttpClient, HttpParams} from "@angular/common/http";
import {IModel} from "../../models/imodel";
import {AbsModel} from "../../models/absmodel";
import {IServices} from "../iservices";
declare const Zone: any;
@Injectable({
    providedIn:"root"
})
export class HandleJsonService<T> implements IServices<T>{
    private url: string;
    private countRow: number;

    constructor(private httpClient: HttpClient, @Inject(AbsModel) private model: IModel<T>) {
        this.url = `${LocalHost.URL}/${this.model.getJsonStorage().value}`;
    }

    public async count(): Promise<Observable<number>> {
        let keyJson = this.model.getJsonStorage().key;
        return this.httpClient.get(this.url).pipe(
            map(res => {
                return res[keyJson].length;
            }),
            catchError((err, caught) => {
                return this.handleError(err);
            }),
        )
    }

  public async doGet(): Promise<Observable<T[]>> {
    let keyJson = this.model.getJsonStorage().key;
    return this.httpClient.get(this.url).pipe(
        map(res => {
            return res[keyJson].map(item => {
                return this.model.getInstance(item);
            })
        }),
        catchError((err, caught) => {
            return this.handleError(err);
        }),
    );
  }

    public async doGetPaging(page: number, limit: number): Promise<Observable<T[]>> {
        this.countRow = await lastValueFrom(await this.count());
        let offset = Math.round((this.countRow / limit) * (page - 1));
        let keyJson = this.model.getJsonStorage().key;
        return this.httpClient.get(this.url).pipe(
            map(res => {
                return res[keyJson].slice(offset, offset + limit);
            }),
        )
    }

    public async doGetById(id: string): Promise<Observable<T>> {
        let keyJson = this.model.getJsonStorage().key;
        return this.httpClient.get(this.url).pipe(
            map(res => {
                return res[keyJson].find<T>(item => this.model.isRightId(item, id))
            }),
        );
    }

    public async doGetByName(name: string): Promise<Observable<T[]>> {
        let keyJson = this.model.getJsonStorage().key;
        return this.httpClient.get(this.url).pipe(
            map(res => {
                return res[keyJson].filter<T>(item => this.model.isRightName(item, name))
            }),
        );
    }

    public async doDelete(id: string): Promise<void> {
        this.httpClient.delete(this.url).pipe(
            map(res => {
                console.log(res);
            })
        )
    }

    public async doUpdate(t: T): Promise<void> {

    }

    public async doInsert(t: T): Promise<Observable<T>> {
        return this.httpClient.post(this.url, t).pipe<T>(
            catchError<T, Observable<T>>((err, caught) => {
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
