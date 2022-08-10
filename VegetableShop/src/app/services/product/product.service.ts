import { Injectable } from '@angular/core';
import {IServices} from "../iservices";
import {Product} from "../../models/product";
import {Observable} from "rxjs";
import {HandleJsonService} from "../handlejson/handlejson.service";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService implements IServices<Product>{
  private static products: Observable<Product[]>;
  handleJson:HandleJsonService<Product>;
  private static instance:ProductService;
  constructor(private httpClient: HttpClient) {
    this.handleJson = new HandleJsonService(httpClient,new Product());
  }

  public static getInstance(httpClient: HttpClient):ProductService{
    if(this.instance==null) this.instance = new ProductService(httpClient);
    return this.instance;
  }

  public doGet():Observable<Product[]>{
    if(ProductService.products==null) ProductService.products = this.handleJson.doGet();
    else return ProductService.products;
  }

  count(): Observable<number> {
    return this.handleJson.count();
  }

  doDelete(id: string): void {
    this.handleJson.doDelete(id);
  }

  doGetById(id: string): Observable<Product> {
    return this.handleJson.doGetById(id);
  }

  doGetPaging(page: number, limit: number): Promise<Observable<Product[]>> {
    return this.handleJson.doGetPaging(page,limit);
  }

  doInsert(t: Product): Observable<Product> {
    return this.handleJson.doInsert(t);
  }

  doUpdate(t: Product): void {
    this.handleJson.doUpdate(t);
  }

  doGetByName(name: string): Observable<Product[]> {
    return this.handleJson.doGetByName(name);
  }

  doGetByCategory(categoryId:string):Observable<Product[]>{
    return this.doGet().pipe(
        map(value =>{
          return value.filter(prod => {
            return prod.idCollection == categoryId
          });

        })
    )
  }


}
