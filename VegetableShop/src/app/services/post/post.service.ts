import { Injectable } from '@angular/core';
import {lastValueFrom, Observable} from 'rxjs';
import {Post} from "../../models/post";
import {IServices} from "../iservices";
import {HttpClient} from "@angular/common/http";
import {HandleJsonService} from "../handlejson/handlejson.service";
import {Product} from "../../models/product";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostService implements IServices<Post>{
  private static posts:Observable<Post[]>;
  handleJson:HandleJsonService<Post>;
  private static instance:PostService;
  constructor(private httpClient: HttpClient) {
    this.handleJson = new HandleJsonService<Post>(httpClient,new Post());
  }
  public static getInstance(httpClient: HttpClient):PostService{
    if(this.instance==null) this.instance = new PostService(httpClient);
    return this.instance;
  }

   async doGet(): Promise<Observable<Post[]>> {
     if (PostService.posts == null) PostService.posts = await this.handleJson.doGet();
     return PostService.posts;
   }

  doGetById(id: string): Promise<Observable<Post>> {
    return this.handleJson.doGetById(id);
  }

  doGetByName(name: string): Promise<Observable<Post[]>> {
    return this.handleJson.doGetByName(name);
  }

  doGetPaging(page: number, limit: number): Promise<Observable<Post[]>> {
    return this.handleJson.doGetPaging(page,limit);
  }

  count(): Promise<Observable<number>> {
    return this.handleJson.count();
  }

  doDelete(id: string): Promise<void> {
    return this.handleJson.doDelete(id);
  }

  doInsert(t: Post): Promise<Observable<Post>> {
    return this.handleJson.doInsert(t);
  }

  doUpdate(t: Post): Promise<void> {
    return this.handleJson.doUpdate(t);
  }

}
