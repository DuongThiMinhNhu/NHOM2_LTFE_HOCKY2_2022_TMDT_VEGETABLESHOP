import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../../../models/post";

@Component({
  selector: 'app-viewblogcard',
  templateUrl: './view-blog-card.component.html',
  styleUrls: ['./view-blog-card.component.scss']
})

export class ViewBlogCardComponent implements OnInit {
  @Input() post:Post;
  constructor() { }

  ngOnInit(): void {
  }

}
