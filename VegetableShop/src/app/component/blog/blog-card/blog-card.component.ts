import {Component, Input, OnInit} from '@angular/core';

interface Blog{
  title: String,
  image: String,
  author: String,
  date: String,
  content: String
}

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  @Input() blog: Blog;
  constructor() { }

  ngOnInit(): void {
  }

}
