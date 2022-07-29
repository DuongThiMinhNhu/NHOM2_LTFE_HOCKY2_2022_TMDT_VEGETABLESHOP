import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../../../models/product";

@Component({
  selector: 'app-outstanding',
  templateUrl: './outstanding.component.html',
  styleUrls: ['./outstanding.component.scss']
})
export class OutstandingComponent implements OnInit {
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