import { Component, OnInit } from '@angular/core';
import {PostService} from "../../../../services/post/post.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../../../../models/post";

@Component({
  selector: 'app-viewblog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit {
  private postService:PostService;
  posts:Observable<Post[]>[];
  constructor(private http:HttpClient) {
    this.postService = PostService.getInstance(http);
    this.posts = [];
    for(let i = 1;i<10;i++){
      this.postService.doGetPaging(i,3).then(re=>{
        if(re!=null)
        this.posts.push(re);
      })

    }

  }

  ngOnInit(): void {
  }

}
