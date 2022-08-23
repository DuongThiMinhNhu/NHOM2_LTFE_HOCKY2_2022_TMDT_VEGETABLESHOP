import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../../../services/cart/cart.service";
import {TaxService} from "../../../../services/tax/tax.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tax} from "../../../../models/tax";
import {Router} from "@angular/router";

@Component({
    selector: 'app-summarycart',
    templateUrl: './summary-cart.component.html',
    styleUrls: ['./summary-cart.component.scss']
})
export class SummaryCartComponent implements OnInit {
    cartService: CartService;
    taxService:TaxService;
    tax:Observable<Tax>;
    constructor(private http:HttpClient,private router:Router) {
        this.cartService = CartService.getInstance();
        this.taxService = TaxService.getInstance(http);
    }

    ngOnInit(): void {
        if(this.cartService!=null){
            console.log(this.cartService.weightCart().toString());
            this.taxService.doGetById(this.cartService.weightCart().toString()).then(
                re=>re.subscribe(res=>console.log(res))
            )
            this.taxService.doGetById(this.cartService.weightCart().toString()).then(
                re=>{
                    this.tax = re;
                }
            )
        }

    }

    checkCondition() {
        return this.cartService.sizeOfCart()==0;
    }

    goToCheckOut() {
        this.router.navigateByUrl("/check-out");
    }
}
