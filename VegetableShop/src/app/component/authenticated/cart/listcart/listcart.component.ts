import {Component, Input, OnInit} from '@angular/core';
import { Cart } from 'src/app/models/cart';
import {CartItem} from "../../../../models/cart-item";

@Component({
  selector: 'app-listcart',
  templateUrl: './listcart.component.html',
  styleUrls: ['./listcart.component.scss']
})
export class ListcartComponent implements OnInit {
  @Input() cartItems:CartItem[];
  constructor() { }

  ngOnInit(): void {
  }

}
