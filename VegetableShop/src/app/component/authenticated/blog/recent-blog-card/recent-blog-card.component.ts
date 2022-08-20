import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../../models/post";

@Component({
  selector: 'app-recent-post-card',
  templateUrl: './recent-blog-card.component.html',
  styleUrls: ['./recent-blog-card.component.scss']
})
export class RecentBlogCardComponent implements OnInit {
  @Input() post: Post;
  constructor() { }

  ngOnInit(): void {
  }

}
