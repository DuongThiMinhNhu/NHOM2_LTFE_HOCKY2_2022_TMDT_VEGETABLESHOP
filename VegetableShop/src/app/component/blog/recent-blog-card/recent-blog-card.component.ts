import {Component, Input, OnInit} from '@angular/core';

interface Blog{
  title: String,
  image: String,
  author: String,
  date: String,
  content: String
}

@Component({
  selector: 'app-recent-blog-card',
  templateUrl: './recent-blog-card.component.html',
  styleUrls: ['./recent-blog-card.component.scss']
})
export class RecentBlogCardComponent implements OnInit {
  @Input() blog: Blog;
  constructor() { }

  ngOnInit(): void {
  }

}
