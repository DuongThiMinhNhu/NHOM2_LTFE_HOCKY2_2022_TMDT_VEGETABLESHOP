import { Injectable } from '@angular/core';
import {IServices} from "../iservices";
import {Product} from "../../models/product";
import {Observable} from "rxjs";
import {HandleJsonService} from "../handlejson/handlejson.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService implements IServices<Product>{
  result: Observable<Product[]>;
  handleJson:HandleJsonService<Product>;
  private static instance:ProductService;
  constructor(private httpClient: HttpClient) {
    this.handleJson = HandleJsonService.getInstance(httpClient,new Product());
  }

  public static getInstance(httpClient: HttpClient):ProductService{
    if(this.instance==null) this.instance = new ProductService(httpClient);
    return this.instance;
  }

  public doGet():Observable<Product[]>{
    return this.handleJson.doGet();
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
}
