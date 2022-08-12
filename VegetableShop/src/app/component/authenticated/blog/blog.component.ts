import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Post} from "../../../models/post";
import {PostService} from "../../../services/post/post.service";
import {IPagingation} from "../../interface/ipagingation";
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit ,IPagingation{
  namePage = "BLOGS";
  imageBg = "assets/images/bg_1.jpg";
  posts: Observable<Post[]>;
  postServices:PostService;
  current:number=1;
  total:Observable<number>;
  limit:number = 8;
  constructor(private http: HttpClient) {
    this.postServices = PostService.getInstance(http);
    this.loadPostsPaging(this.current,this.limit).then(re=>{
      this.posts = re;
    });
    this.loadProductsCount().then(re=>{
      this.total = re;
    })
  }
  public async loadProductsCount() {
    return this.postServices.count();
  }
  public async loadPostsPaging(page:number,limit:number){
    return await this.postServices.doGetPaging(page,limit);
  }

  ngOnInit(): void {
  }

  onGoTo(page: number): void {
    this.current = page;
    this.loadPostsPaging(this.current,this.limit).then(re=>{
      this.posts = re;
    });
  }

  onNext(page: number): void {
    this.current = page + 1;
    this.loadPostsPaging(this.current,this.limit).then(re=>{
      this.posts = re;
    });
  }

  onPrevious(page: number): void {
    this.current = page - 1;
    this.loadPostsPaging(this.current,this.limit).then(re=>{
      this.posts = re;
    });
  }

}
