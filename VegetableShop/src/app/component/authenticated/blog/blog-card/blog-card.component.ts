import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../../../../models/post";
import {PostService} from "../../../../services/post/post.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  @Input() post: Post;
  // post:Observable<Post>;
  // postServices:PostService;
  constructor() {
    // this.postServices = PostService.getInstance(httpClient);
    // this.post = this.postServices.doGetById("2");
  }

  ngOnInit(): void {
  }

}
