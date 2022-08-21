import {Component, Input, OnInit} from '@angular/core';
import {CartItem} from "../../../../models/cart-item";

@Component({
  selector: 'app-cart-item-mini',
  templateUrl: './cart-item-mini.component.html',
  styleUrls: ['./cart-item-mini.component.scss']
})
export class CartItemMiniComponent implements OnInit {
  @Input() cartItem:CartItem;
  constructor() { }

  ngOnInit(): void {
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

  upQuantity() {
    this.cartItem.quantity++;
  }

}
