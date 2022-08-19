import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../../../../models/post";
import {PostService} from "../../../../services/post/post.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
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
