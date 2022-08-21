import {Observable} from "rxjs";

export interface IJsonServices<T> {
    count(): Promise<Observable<number>>;

    doGet(): Promise<Observable<T[]>>;

    doGetPaging(page: number, limit: number): Promise<Observable<T[]>>;

    doGetById(id: string): Promise<Observable<T>>;

    doGetByName(name: string): Promise<Observable<T[]>>;
}
