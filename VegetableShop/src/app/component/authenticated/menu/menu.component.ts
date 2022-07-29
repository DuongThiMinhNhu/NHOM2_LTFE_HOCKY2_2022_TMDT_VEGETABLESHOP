import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

interface Product {
  id: Number,
  name: String,
  price: Number,
  image: String,
  description: String,
  id_cate: Number,
  number: Number,
  active: boolean
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private _jsonProduct = 'assets/data/productsnhu.json';
  products: Product[] = [];
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.products = data;
    })
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonProduct);
  }
  ngOnInit(): void {
  }

}
