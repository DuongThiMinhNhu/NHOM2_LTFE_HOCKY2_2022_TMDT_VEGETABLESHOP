import {Component, Input, OnInit} from '@angular/core';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() name = "Minh Nhu";
  @Input() price = 0;
  @Input() image = "assets/images/product-1.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
