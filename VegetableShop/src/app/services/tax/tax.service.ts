import { Injectable } from '@angular/core';
import {IJsonServices} from "../ijson.services";
import {Tax} from "../../models/tax";
import {Observable} from "rxjs";
import {HandleJsonService} from "../handlejson/handlejson.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaxService implements IJsonServices<Tax>{
  handleJson:HandleJsonService<Tax>;
  private static instance:TaxService;
  constructor(private http:HttpClient) {
    this.handleJson = new HandleJsonService<Tax>(http,new Tax());
  }
  static getInstance(http:HttpClient):TaxService{
    if(this.instance==null) this.instance = new TaxService(http);
    return this.instance;
  }


  count(): Promise<Observable<number>> {
    return this.handleJson.count();
  }

  doGet(): Promise<Observable<Tax[]>> {
    return this.handleJson.doGet()
  }

  doGetById(id: string): Promise<Observable<Tax>> {
    return this.handleJson.doGetById(id);
  }

  doGetByName(name: string): Promise<Observable<Tax[]>> {
    return Promise.resolve(undefined);
  }

  doGetPaging(page: number, limit: number): Promise<Observable<Tax[]>> {
    return Promise.resolve(undefined);
  }
  getTaxByGrams(){

  }
}
