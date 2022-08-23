import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {CartService} from "../../../services/cart/cart.service";
import {Cart} from "../../../models/cart";
import {HttpClient} from "@angular/common/http";
import {Order} from "../../../models/order";
import {SessionKey} from "../../../../assets/resources/sessionkey";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  authService: AuthenticationService;
  cartService: CartService;
  order: Order;
  constructor(private http: HttpClient) {
    this.authService = AuthenticationService.getInstance(http);
    this.cartService = CartService.getInstance();
    this.order = JSON.parse(sessionStorage.getItem(SessionKey.ORDER));
  }

  ngOnInit(): void {
  }

}
