import {Component, HostListener, OnInit} from '@angular/core';
import {ProductService} from "../../../../services/product/product.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../../../models/product";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private productService: ProductService;
  products:Observable<Product[]>;
  hadText:boolean;
  private wasInside = false;
  constructor(private http:HttpClient) {
    this.productService = ProductService.getInstance(http);
  }

  ngOnInit(): void {
  }
  @HostListener('click')
  clickInside() {
    this.hadText = true;
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      this.hadText = false;
    }
    this.wasInside = false;
  }
    onKeyup($event) {
    this.hadText = true;
      let txt: string = $event.target.value;
      if (txt !== '') {
        this.productService.doGetByName(txt).then(
            re=>{
              this.products =re;
            }
        )
      }
    }

}
