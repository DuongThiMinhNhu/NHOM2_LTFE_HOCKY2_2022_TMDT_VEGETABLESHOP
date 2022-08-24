import {Injectable} from '@angular/core';
import {lastValueFrom, Observable} from 'rxjs';
import {Post} from "../../models/post";
import {HttpClient} from "@angular/common/http";
import {HandleJsonService} from "../handlejson/handlejson.service";
import {Product} from "../../models/product";
import {map} from "rxjs/operators";
import {IJsonServices} from "../ijson.services";

@Injectable({
    providedIn: 'root'
})
export class PostService implements IJsonServices<Post> {
    private static posts: Observable<Post[]>;
    handleJson: HandleJsonService<Post>;
    recentPost:number[];

    private static instance: PostService;

    constructor(private httpClient: HttpClient) {
        this.handleJson = new HandleJsonService<Post>(httpClient, new Post());
        this.recentPost = [];
    }

    public static getInstance(httpClient: HttpClient): PostService {
        if (this.instance == null) this.instance = new PostService(httpClient);
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
        return this.handleJson.doGetPaging(page, limit);
    }

    count(): Promise<Observable<number>> {
        return this.handleJson.count();
    }


}
