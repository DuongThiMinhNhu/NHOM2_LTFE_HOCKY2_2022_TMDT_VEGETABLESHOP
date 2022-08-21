import { Component, OnInit } from '@angular/core';
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
  constructor(private http:HttpClient) {
    this.productService = ProductService.getInstance(http);
  }

  ngOnInit(): void {
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
        // const search_box = document.querySelector('.search_box');
        // let txt: string = $event.target.value;
        // search_box.innerHTML = '';
        // if (txt !== '') {
        //   search_box.classList.remove('d-none');
        //   this.productService.searchProduct(txt).then(res => {
        //         console.log(res);
        //         res.map(item =>{
        //           const search_item = document.createElement('a');
        //           search_item.classList.add('search_item');
        //           search_item.innerText = item['name'];
        //           search_item.href = "/detail-product/" + item['id']
        //           search_item.style.margin = "10px";
        //           search_item.style.padding= "10px";
        //           search_item.style.background = 'pink'
        //           search_item.style.borderRadius = "50px";
        //           search_box.append(search_item)
        //         })
        //       }
        //   );
        // } else {
        //   search_box.classList.add('d-none');
        // }
      }
    }

  onKeydown($event: KeyboardEvent) {
    this.hadText = false;
  }
}
