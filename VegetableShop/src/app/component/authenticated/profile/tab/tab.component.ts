import {Component, Input, OnInit} from '@angular/core';
import {Account} from "../../../../models/account";
import {SessionKey} from "../../../../../assets/resources/sessionkey";
import {Product} from "../../../../models/product";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ProductService} from "../../../../services/product/product.service";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
    @Input() accountCurrent: Account;
    productsFavourite: Observable<Product>[];
    productsHistory: any;
    productService:ProductService;

    constructor(private http:HttpClient) {
        this.productService = ProductService.getInstance(http)
        let items = JSON.parse(sessionStorage.getItem(SessionKey.HEART));
        this.productsFavourite = [];
        if(items!=null)
        for(let i = 0;i<items.length;i++){
            this.productService.doGetById(items[i]).then(
                res=>{
                    console.log(res)
                    if(res!=null)
                   this.productsFavourite.push(res);
                }
            )
        }
    }

    ngAfterContentInit(): void {
        // console.log( document.getElementsByClassName("mat-tab-body-content").item(0))
        // document.getElementsByClassName("mat-tab-body-content").item(0).classList.add("row");
    }

    ngOnInit(): void {
    }

}
