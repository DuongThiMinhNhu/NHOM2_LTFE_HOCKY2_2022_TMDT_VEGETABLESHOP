import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Post} from "../../models/post";
import {IServices} from "../iservices";
import {HttpClient} from "@angular/common/http";
import {HandleJsonService} from "../handlejson/handlejson.service";

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

  count(): Observable<number> {
    return this.handleJson.count();
  }

  doDelete(id: string): void {
  }

  doGet(): Observable<Post[]> {
    if(PostService.posts==null) PostService.posts = this.handleJson.doGet();
    return PostService.posts;
  }

  doGetById(id: string): Observable<Post> {
    return this.handleJson.doGetById(id);
  }

  doGetByName(name: string): Observable<Post[]> {
    return this.handleJson.doGetByName(name);
  }

  doGetPaging(page: number, limit: number): Promise<Observable<Post[]>> {
    return this.handleJson.doGetPaging(page,limit);
  }

  doInsert(t: Post): Observable<Post> {
    return undefined;
  }

  doUpdate(t: Post): void {
  }
}
