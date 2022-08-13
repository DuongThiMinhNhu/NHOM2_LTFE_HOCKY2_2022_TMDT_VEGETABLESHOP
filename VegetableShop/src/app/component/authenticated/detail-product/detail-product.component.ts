import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom, Observable} from "rxjs";
import {Product} from "../../../models/product";
import {ProductService} from "../../../services/product/product.service";
import {map} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  products: Observable<Product[]>;
  productServices : ProductService;
  product: Product;
  id: string = "";

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.productServices = ProductService.getInstance(http);
   // this.products = this.productServices.doGet();
     this.route.params.subscribe((param) => {
       this.id = param?.id;
     })
    this.getDataPro();
     console.log(this.product, "----------------")
  }

  async getDataPro(){
    this.product = await lastValueFrom(await this.productServices.doGetById(this.id));
  }

  ngOnInit(): void {
  }
}
