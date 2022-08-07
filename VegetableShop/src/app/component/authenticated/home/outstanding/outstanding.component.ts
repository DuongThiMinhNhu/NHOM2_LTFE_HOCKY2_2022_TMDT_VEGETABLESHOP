import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../../../models/product";
import {ProductService} from "../../../../services/product/product.service";

@Component({
  selector: 'app-outstanding',
  templateUrl: './outstanding.component.html',
  styleUrls: ['./outstanding.component.scss']
})
export class OutstandingComponent implements OnInit {
  products: Observable<Product[]>

  constructor(private productService:ProductService) {
    this.products = productService.doGet();
  }


  ngOnInit(): void {
  }
}