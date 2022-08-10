import { Injectable } from '@angular/core';
import {IServices} from "../iservices";
import {Category} from "../../models/category";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {HandleJsonService} from "../handlejson/handlejson.service";

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements IServices<Category>{
  private static categories:Observable<Category[]>;
  handleJson:HandleJsonService<Category>;
  private static instance:CategoryService;
  constructor(private httpClient:HttpClient) {
    this.handleJson = new HandleJsonService(httpClient,new Category());
  }
  public static getInstance(httpClient: HttpClient):CategoryService{
    if(this.instance==null) this.instance = new CategoryService(httpClient);
    return this.instance;
  }
  count(): Observable<number> {
    return this.handleJson.count();
  }

  doDelete(id: string): void {
  }

  doGet(): Observable<Category[]> {
    if(CategoryService.categories==null) CategoryService.categories = this.handleJson.doGet();
    return CategoryService.categories;
  }

  doGetById(id: string): Observable<Category> {
    return this.handleJson.doGetById(id);
  }

  doGetByName(name: string): Observable<Category[]> {
    return this.handleJson.doGetByName(name);
  }

  doGetPaging(page: number, limit: number): Promise<Observable<Category[]>> {
    return this.handleJson.doGetPaging(page,limit);
  }

  doInsert(t: Category): Observable<Category> {
    return undefined;
  }

  doUpdate(t: Category): void {
  }

}
