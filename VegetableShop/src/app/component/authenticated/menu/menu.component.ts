import {Component, Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../../models/product";
import {ProductService} from "../../../services/product/product.service";


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
  constructor(private productService:ProductService) {
      this.products = productService.doGet();
  }

  ngOnInit(): void {

  }

}
