import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.scss']
})
export class DetailBlogComponent implements OnInit {
  namePage = "BLOG";
  imageBg = "assets/images/bg_1.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
