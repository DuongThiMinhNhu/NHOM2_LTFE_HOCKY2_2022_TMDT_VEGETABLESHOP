import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Post} from "../../../models/post";
import {PostService} from "../../../services/post/post.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  namePage = "BLOGS";
  imageBg = "assets/images/bg_1.jpg";
  posts: Observable<Post[]>;
  postServices:PostService;
  constructor(private http: HttpClient) {
    this.postServices = PostService.getInstance(http);
    this.loadPosts().then(re=>{
      this.posts = re;
    });

  }
  public async loadPosts(){
    return await this.postServices.doGet();
  }

  ngOnInit(): void {
  }

}
