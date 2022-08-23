import {Component, Input, OnInit} from '@angular/core';
import {CartItem} from "../../../../models/cart-item";
import {CartService} from "../../../../services/cart/cart.service";

@Component({
    selector: 'app-cart-item-mini',
    templateUrl: './cart-item-mini.component.html',
    styleUrls: ['./cart-item-mini.component.scss']
})
export class CartItemMiniComponent implements OnInit {
    @Input() cartItem: CartItem;
  cartService: CartService;
  constructor() {
    this.cartService = CartService.getInstance();
  }
  ngOnInit(): void {
  }
  downQuantity() {
    if(this.cartItem.quantity > 1){
      this.cartService.downQuantity(this.cartItem.product.id);
    }

  }

  specificQuantity(event) {
    if(this.cartItem.quantity > 0){
      this.cartService.upQuantitySpecific(this.cartItem.product.id,event.target.value);
    }
    this.cartService.upQuantitySpecific(this.cartItem.product.id,1);
    console.log(this.cartItem.quantity);
  }

  upQuantity() {
    this.cartService.upQuantity(this.cartItem.product.id);
  }


  removeItem() {
    this.cartService.removeProduct(this.cartItem.product.id);
  }
}
