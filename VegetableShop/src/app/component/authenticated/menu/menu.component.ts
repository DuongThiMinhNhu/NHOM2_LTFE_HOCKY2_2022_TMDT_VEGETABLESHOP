import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../../models/product";
import {ProductService} from "../../../services/product/product.service";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
@Injectable({
  providedIn:"root"
})
export class MenuComponent implements OnInit {
  products: Observable<Product[]>;
  productServices: ProductService;
  productList: Observable<Product[]>;
  constructor(private httpClient:HttpClient) {
    this.productServices = ProductService.getInstance(httpClient);
      this.products = this.productServices.doGet();

      //test get id
      this.productServices.doGetById("117731870").subscribe(value => console.log(value));
    this.loadListProducts().then(r => {
        this.productList.subscribe(value => console.log(value));
        }
    );

  }

  public async loadListProducts() {
  this.productList = await this.productServices.doGetPaging(4,9);
}


  ngOnInit(): void {

  }

}
