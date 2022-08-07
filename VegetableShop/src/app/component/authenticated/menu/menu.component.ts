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
  constructor(private httpClient:HttpClient) {
    this.productServices = ProductService.getInstance(httpClient);
      this.products = this.productServices.doGet();
  }

  ngOnInit(): void {

  }

}
