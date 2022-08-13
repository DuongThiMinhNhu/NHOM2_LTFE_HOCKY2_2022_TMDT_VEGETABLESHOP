import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../../models/product";
import {ProductService} from "../../../services/product/product.service";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  products: Observable<Product[]>;
  productServices : ProductService;
  constructor(private http: HttpClient) {
    this.productServices = ProductService.getInstance(http);
   // this.products = this.productServices.doGet();
  }

  ngOnInit(): void {
  }
  myClickFunctionResult(envent){
    const al1 = document.querySelector('.answer')
    if (al1.className == "answer") {
      document.querySelector('.answer').classList.add('active');
      console.log("Mở");
      document.querySelector('.result2').classList.add('result1');
    } else {
      console.log("Đóng");
      document.querySelector('.answer').classList.remove('active');
      document.querySelector('.result2').classList.remove('result1');
    }

  }
}
