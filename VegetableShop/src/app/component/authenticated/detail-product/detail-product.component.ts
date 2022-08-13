import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom, Observable} from "rxjs";
import {Product} from "../../../models/product";
import {ProductService} from "../../../services/product/product.service";
import {map} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-detail-product',
    templateUrl: './detail-product.component.html',
    styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
    products: Product[];
    productServices: ProductService;
    product: Product;
    id: string = "";

    constructor(private http: HttpClient, private route: ActivatedRoute) {

        this.productServices = ProductService.getInstance(http);

        this.route.params.subscribe((param) => {
            this.id = param?.id;
        })
        this.getDataPro();
        while(this.product === null){
            location.reload();
            console.log(this.product, "%%%%%%%%%%%%%%%%");
        }
        console.log(this.product, "----------$$$$$");
    }

    async getDataPro() {
        this.product = await lastValueFrom(await this.productServices.doGetById(this.id));
        // this.products = await lastValueFrom(await this.productServices.doGet());
    }

  ngOnInit(): void {
  }
  myClickFunctionResult(envent){
    const al1 = document.querySelector('.answer')
    if (al1.className == "answer") {
      document.querySelector('.answer').classList.add('active');
      console.log("Mở");
      document.querySelector('.result2').classList.add('result1');
    } else {
      console.log("Đóng");
      document.querySelector('.answer').classList.remove('active');
      document.querySelector('.result2').classList.remove('result1');
    }

  }
}
