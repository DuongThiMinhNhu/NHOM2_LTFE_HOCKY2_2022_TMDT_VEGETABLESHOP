import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../../../services/cart/cart.service";
import {Product} from "../../../../models/product";



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product:Product;
  cartService:CartService;
  constructor() {
    this.cartService = CartService.getInstance();
  }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    console.log(this.cartService.sizeOfCart())
  }
}
