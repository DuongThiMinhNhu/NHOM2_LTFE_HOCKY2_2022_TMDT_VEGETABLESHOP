import {Component, Input, OnInit} from '@angular/core';
import { Post } from 'src/app/models/post';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.scss']
})
export class DetailBlogComponent implements OnInit {
  @Input() post:Observable<Post>;
  parse:DOMParser;
  constructor() {
    this.parse = new DOMParser();
  }

  ngOnInit(): void {

  }

}
