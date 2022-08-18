import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../../../services/cart/cart.service";

@Component({
  selector: 'app-summarycart',
  templateUrl: './summary-cart.component.html',
  styleUrls: ['./summary-cart.component.scss']
})
export class SummaryCartComponent implements OnInit {
  @Input() cartService:CartService;
  constructor() { }

  ngOnInit(): void {
  }

}
