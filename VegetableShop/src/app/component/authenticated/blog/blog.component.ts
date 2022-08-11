import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Post} from "../../../models/post";
import {PostService} from "../../../services/post/post.service";

interface Blog{
  title: String,
  image: String,
  author: String,
  date: String,
  content: String
}

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
    this.posts = this.postServices.doGet();
  }

  ngOnInit(): void {
  }

}
