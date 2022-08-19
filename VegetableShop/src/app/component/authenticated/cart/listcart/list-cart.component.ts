import {Component, Input, OnInit} from '@angular/core';
import { Cart } from 'src/app/models/cart';
import {CartItem} from "../../../../models/cart-item";

@Component({
  selector: 'app-listcart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.scss']
})
export class ListCartComponent implements OnInit {
  @Input() cartItems:CartItem[];
  constructor() { }

  ngOnInit(): void {
  }

}
