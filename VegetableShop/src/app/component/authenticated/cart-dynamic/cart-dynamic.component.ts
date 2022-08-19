import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../models/product";
import {Cart} from "../../../models/cart";
import {CartService} from "../../../services/cart/cart.service";
import {Observable} from "rxjs";
import {CartItem} from "../../../models/cart-item";

@Component({
  selector: 'app-cart-dynamic',
  templateUrl: './cart-dynamic.component.html',
  styleUrls: ['./cart-dynamic.component.scss']
})
export class CartDynamicComponent implements OnInit {
  cartService:CartService;
  emptyCart: boolean;
  openCart: boolean;
  constructor() {
    this.cartService = CartService.getInstance();
  }
  getListProductInCart():CartItem[]{
    return [...Array.from(this.cartService.getCartItem())];
  }

  getSizeCart():number{
    return this.cartService.sizeOfCart();
  }

  ngOnInit(): void {
  }

  openCartAction() {
    this.openCart = !this.openCart;
    if(this.openCart){
      console.log("mở cart");
      console.log(this.getListProductInCart().length)
    }else{
      console.log("đóng cart");
    }
  }
}
