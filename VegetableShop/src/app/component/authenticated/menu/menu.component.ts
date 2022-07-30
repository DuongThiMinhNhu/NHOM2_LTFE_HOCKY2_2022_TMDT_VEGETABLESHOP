import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Util} from "src/app/interface/util";
interface Product {
  id: Number,
  name: String,
  price: Number,
  image: String,
  description: String,
  id_type: String,
  grams: Number,
  number: Number,
  updated_at: String
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private _jsonProduct = 'assets/data/products.json';

  products: Observable<Product[]>;
  constructor(private http: HttpClient) {
    let util = new Util<Product>(http);
    // this.getJSON().subscribe(data => {
    //   this.products = data;
    // })
    let params = new HttpParams().set('format', 'json');
    this.products = util.convertJsonToObject("http://localhost:4200/"+this._jsonProduct, params);
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonProduct);
  }
  ngOnInit(): void {
  }

}
