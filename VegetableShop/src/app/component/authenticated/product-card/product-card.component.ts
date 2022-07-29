import {Component, Input, OnInit} from '@angular/core';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() name = "";
  @Input() price = 0;
  @Input() image = "";

  constructor() { }

  ngOnInit(): void {
  }

}
