import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom, Observable} from "rxjs";
import {Product} from "../../../models/product";
import {ProductService} from "../../../services/product/product.service";
import {map} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../../../services/cart/cart.service";

@Component({
    selector: 'app-detail-product',
    templateUrl: './detail-product.component.html',
    styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
    product: Product | undefined;
    products: Observable<Product[]> | undefined;
    productServices: ProductService;
    id: string = "";
    cartService:CartService;
    quantity:number;
    constructor(private http: HttpClient, private route: ActivatedRoute) {
        this.productServices = ProductService.getInstance(http);
        this.cartService = CartService.getInstance();
    }

    async getProduct(idTarget: string): Promise<void> {
        this.product = await lastValueFrom(await this.productServices.doGetById(idTarget));
    }

    async getFamiliarProducts(id: string): Promise<void> {
        this.products = await this.productServices.familiarProduct(id);
    }

    async getDataPro(idTarget: string) {
        await this.getProduct(idTarget).then(res => {
            this.getFamiliarProducts(this.product.idCollection).then(res => {
            })
        });
    }

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');
        this.getDataPro(this.id);
    }

    myClickFunctionResult(envent) {
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

    downQuantity() {
      this.quantity++;
    }

    upQuantity() {
        this.quantity--;
    }

    addToCart() {
        this.cartService.upQuantitySpecific(parseInt(this.id),this.quantity);
    }
}
