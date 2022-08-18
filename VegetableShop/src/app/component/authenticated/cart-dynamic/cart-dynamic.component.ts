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
  productAdded:string;
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
  addProduct(target) {
    // this is just a product placeholder
   // this.productAdded = '<li class="cd-cart__product"><div class="cd-cart__image"><a href="#0"><img src="assets/img/product-preview.png" alt="placeholder"></a></div><div class="cd-cart__details"><h3 class="truncate"><a href="#0">Product Name</a></h3><span class="cd-cart__price">$25.99</span><div class="cd-cart__actions"><a href="#0" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-'+ productId +'">Qty</label><span class="cd-cart__select"><select class="reset" id="cd-product-'+ productId +'" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';

  };

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
