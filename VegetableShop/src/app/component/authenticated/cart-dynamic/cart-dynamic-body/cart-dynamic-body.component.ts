import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../../models/product";
import {CartService} from "../../../../services/cart/cart.service";
import {CartItem} from "../../../../models/cart-item";

@Component({
  selector: 'app-cart-dynamic-body',
  templateUrl: './cart-dynamic-body.component.html',
  styleUrls: ['./cart-dynamic-body.component.scss']
})
export class CartDynamicBodyComponent implements OnInit {
  @Input() cartItem:CartItem;
  constructor() {
  }

  ngOnInit(): void {
  }

}
