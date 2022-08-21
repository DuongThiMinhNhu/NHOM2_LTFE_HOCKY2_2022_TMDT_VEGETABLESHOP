import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../../../../models/post";
import {PostService} from "../../../../services/post/post.service";
import {IPagingation} from "../../../interface/ipagingation";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-list-post',
    templateUrl: './list-post.component.html',
    styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {
    posts: Observable<Post[]>;
    postServices: PostService;
    current: number = 1;
    total: Observable<number>;
    limit: number = 8;
    isDetailPost: number = -1;

    constructor(private http: HttpClient) {
        this.postServices = PostService.getInstance(http);
        this.loadPostsPaging(this.current, this.limit).then(re => {
            this.posts = re;
        });
        this.loadPostsCount().then(re => {
            this.total = re;
        })
    }

    public async loadPostsCount() {
        return this.postServices.count();
    }

    ngOnInit(): void {
    }

    onGoTo(page: number): void {
        this.current = page;
        this.loadPostsPaging(this.current, this.limit).then(re => {
            this.posts = re;
        });
    }

    onNext(page: number): void {
        this.current = page + 1;
        this.loadPostsPaging(this.current, this.limit).then(re => {
            this.posts = re;
        });
    }

    onPrevious(page: number): void {
        this.current = page - 1;
        this.loadPostsPaging(this.current, this.limit).then(re => {
            this.posts = re;
        });
    }

    public async loadPostsPaging(page: number, limit: number) {
        return await this.postServices.doGetPaging(page, limit);
    }

    selectPost(id: number) {
        this.isDetailPost = id;
    }
}
