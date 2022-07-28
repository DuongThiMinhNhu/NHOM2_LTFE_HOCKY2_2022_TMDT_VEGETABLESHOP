import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

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
  private _jsonBlog = "assets/data/blog.json";
  blogs: Blog[] = [];


  public getJSON(): Observable<any> {
    return this.http.get(this._jsonBlog);
  }

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.blogs= data;
    })
  }

  ngOnInit(): void {
  }

}
