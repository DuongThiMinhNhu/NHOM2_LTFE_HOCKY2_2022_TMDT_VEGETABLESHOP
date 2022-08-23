import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../../../services/cart/cart.service";
import {TaxService} from "../../../../services/tax/tax.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tax} from "../../../../models/tax";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
import {AuthenticationService} from "../../../../services/authentication/authentication.service";

@Component({
    selector: 'app-summarycart',
    templateUrl: './summary-cart.component.html',
    styleUrls: ['./summary-cart.component.scss']
})
export class SummaryCartComponent implements OnInit {
    cartService: CartService;
    taxService:TaxService;
    tax:Observable<Tax>;
    authService: AuthenticationService;
    constructor(private http:HttpClient,private router:Router) {
        this.cartService = CartService.getInstance();
        this.taxService = TaxService.getInstance(http);
        this.authService = AuthenticationService.getInstance(http);
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

    checkCondition() {
        return this.cartService.sizeOfCart()==0;
    }

    goToCheckOut() {
        if(this.authService.isLoggedIn()){
            this.router.navigateByUrl("/check-out");
        } else {
            this.router.navigateByUrl("/");
        }
    }
}
