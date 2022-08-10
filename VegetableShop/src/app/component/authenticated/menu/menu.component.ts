import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../../models/product";
import {ProductService} from "../../../services/product/product.service";
import {HttpClient} from "@angular/common/http";
import {CategoryService} from "../../../services/category/category.service";
import {Category} from "../../../models/category";

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
  categoryServices:CategoryService;
  productList: Observable<Product[]>;
  categories:Observable<Category[]>;
  constructor(private httpClient:HttpClient) {
    this.productServices = ProductService.getInstance(httpClient);
    this.categoryServices = CategoryService.getInstance(httpClient);
      this.products = this.productServices.doGet();
      this.categories = this.categoryServices.doGet();

    //   this.categories.subscribe(value => console.log(value));
    //   //test get id
    //   this.productServices.doGetById("117731870").subscribe(value => console.log(value));
    // this.loadListProducts().then(r => {
    //     this.productList.subscribe(value => console.log(value));
    //     }
    // );
    // this.productServices.doGetByName("t").subscribe(value => console.log(value));

  }

  public async loadListProducts() {
  this.productList = await this.productServices.doGetPaging(4,9);
}


  ngOnInit(): void {

  }

}
