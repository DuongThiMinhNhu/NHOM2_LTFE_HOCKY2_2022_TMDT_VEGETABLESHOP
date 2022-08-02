import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Util} from "src/app/interface/util";
import {debounceTime, distinctUntilChanged, switchMap, tap} from "rxjs/operators";
import {SearchService} from "../../../services/search/search-test.service";
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
  private loading:boolean;
  private _jsonProduct = 'assets/data/products.json';

  products: Observable<Product[]>;
  constructor(private http: HttpClient) {
    let util = new Util<Product>(this.http);
    let params = new HttpParams();
        tap(_ => (this.loading = true))
       this.products = util.convertJsonToObject("http://localhost:4200/"+this._jsonProduct, params)
        tap(_ => (this.loading = false))


    //let util = new Util<Product>(http);
    // this.getJSON().subscribe(data => {
    //   this.products = data["products"];
    // })
   // let params = new HttpParams();
   // this.products = util.convertJsonToObject("http://localhost:4200/"+this._jsonProduct, params);
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonProduct);
  }
  ngOnInit(): void {
    let util = new Util<Product>(this.http);
    let params = new HttpParams();
    // console.log(util.convertJsonToObject("http://localhost:4200/"+this._jsonProduct, params));
  }

}
