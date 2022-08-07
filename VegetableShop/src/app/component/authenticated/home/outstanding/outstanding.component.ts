import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../../../models/product";
import {ProductService} from "../../../../services/product/product.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-outstanding',
  templateUrl: './outstanding.component.html',
  styleUrls: ['./outstanding.component.scss']
})
@Injectable({
  providedIn:"root"
})
export class OutstandingComponent implements OnInit {
  products: Observable<Product[]>
  productServices: ProductService;
  constructor(private httpClient:HttpClient) {
    this.productServices = ProductService.getInstance(httpClient);
    this.products = this.productServices.doGet();
  }
  ngOnInit(): void {
  }
}