import {Component, Input, OnInit} from '@angular/core';
import {CartItem} from "../../../../../models/cart-item";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem:CartItem;
  constructor() { }

  ngOnInit(): void {
  }

  upQuantity() {
    this.cartItem.quantity++;
  }
  downQuantity() {
    if(this.cartItem.quantity > 1)
    this.cartItem.quantity--;
  }

  specificQuantity(event) {
    if(this.cartItem.quantity > 0){
      this.cartItem.quantity = event.target.value;
    }
    this.cartItem.quantity = 1;
    console.log(this.cartItem.quantity);
  }
}
