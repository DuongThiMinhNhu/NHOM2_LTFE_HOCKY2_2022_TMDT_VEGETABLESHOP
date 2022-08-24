import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Post} from "../../../models/post";
import {PostService} from "../../../services/post/post.service";
import {IPagingation} from "../../interface/ipagingation";
import {ActivatedRoute, Router} from "@angular/router";
import {BannerStorage} from "../../../../assets/resources/bannerstorage";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
    namePage = BannerStorage.BLOG.name;
    imageBg = BannerStorage.BLOG.image;
    posts: Observable<Post[]>;
    postServices: PostService;
    id: string;
    post: Observable<Post>;
    postNew: Observable<Post[]>;
    postRecent: Observable<Post>[];
    constructor(private http: HttpClient, private route: ActivatedRoute,private titleService : Title) {
    titleService.setTitle('Blog');
        this.id = this.route.queryParams["_value"]["id"];

        this.postServices = PostService.getInstance(http);
        this.postServices.recentPost.push(parseInt(this.id));
        if (this.id != null) {
            this.postServices.doGetById(this.id).then(
                re => {
                    this.post = re;
                }
            );
        }

        this.postServices.doGetPaging(1,5).then(
            re=>{
                this.postNew = re;
            }
        )
        for(let i = 0;i<this.postServices.recentPost.length;i++){
            this.postServices.doGetById(this.postServices.recentPost[i].toString()).then(
                re => this.postRecent.push(re)
            );
        }

    }

    ngOnInit(): void {

    }


}
