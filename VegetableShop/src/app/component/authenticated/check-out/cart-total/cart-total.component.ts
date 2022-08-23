import {Component, OnInit} from '@angular/core';
import {Cart} from "../../../../models/cart";
import {SessionKey} from "../../../../../assets/resources/sessionkey";
import {Account} from "../../../../models/account";
import {CartService} from "../../../../services/cart/cart.service";
import {TaxService} from "../../../../services/tax/tax.service";
import {Observable} from "rxjs";
import {Tax} from "../../../../models/tax";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
    selector: 'app-cart-total',
    templateUrl: './cart-total.component.html',
    styleUrls: ['./cart-total.component.scss']
})
export class CartTotalComponent implements OnInit {
    cartService: CartService;
    taxService:TaxService;
    tax:Observable<Tax>;
    constructor(private http:HttpClient,private router:Router) {
        this.cartService = CartService.getInstance(http);
        this.taxService = TaxService.getInstance(http);
    }

    ngOnInit(): void {
        this.getShippingByWeight();
    }
    getShippingByWeight(){
        let weight = this.cartService.weightCart();
        if(weight<1000) {
            this.taxService.doGetById("1000").then(
                re=>{
                    if(re!=null)
                        this.tax = re;
                }
            )
        }else if(weight<10000){
            this.taxService.doGetById("10000").then(
                re=>{
                    if(re!=null)
                        this.tax = re;
                }
            )
        }else if(weight<20000){
            this.taxService.doGetById("20000").then(
                re=>{
                    if(re!=null)
                        this.tax = re;
                }
            )
        }else if(weight>=20000){
            this.taxService.doGetById("30000").then(
                re=>{
                    if(re!=null)
                        this.tax = re;
                }
            )
        }

    }
}
