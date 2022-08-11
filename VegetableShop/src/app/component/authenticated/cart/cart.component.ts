import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  namePage = "Cart";
  imageBg = "assets/images/bg_1.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
