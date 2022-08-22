import { Component } from '@angular/core';
import {PostService} from "../../../../services/post/post.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../../../../models/post";

@Component({
  selector: 'app-viewblog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent  {
  private postService:PostService;
  posts:Observable<Post[]>;
  constructor(private http:HttpClient) {
    this.postService = PostService.getInstance(http);
      let krandom = Math.floor(Math.random() * 2)+1;
    console.log(krandom)
      this.postService.doGetPaging(krandom,2).then(re=>{
        if(re!=null)
        this.posts = re;
      })
  }

  
}
