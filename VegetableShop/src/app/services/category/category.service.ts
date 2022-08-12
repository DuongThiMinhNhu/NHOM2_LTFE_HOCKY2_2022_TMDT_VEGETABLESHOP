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

  async doGet(): Promise<Observable<Category[]>> {
    if (CategoryService.categories == null) CategoryService.categories = await this.handleJson.doGet();
    return CategoryService.categories;
  }

  count(): Promise<Observable<number>> {
    return this.handleJson.count();
  }

  doDelete(id: string): Promise<void> {
    return this.handleJson.doDelete(id);
  }

  doGetById(id: string): Promise<Observable<Category>> {
    return this.handleJson.doGetById(id);
  }

  doGetByName(name: string): Promise<Observable<Category[]>> {
    return this.handleJson.doGetByName(name);
  }

  doGetPaging(page: number, limit: number): Promise<Observable<Category[]>> {
    return this.handleJson.doGetPaging(page,limit);
  }

  doInsert(t: Category): Promise<Observable<Category>> {
    return this.handleJson.doInsert(t);
  }

  doUpdate(t: Category): Promise<void> {
    return this.handleJson.doUpdate(t);
  }



}
