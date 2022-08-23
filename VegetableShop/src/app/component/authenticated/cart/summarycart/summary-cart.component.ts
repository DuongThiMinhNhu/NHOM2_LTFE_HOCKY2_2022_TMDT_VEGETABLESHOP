import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../../../services/cart/cart.service";
import {TaxService} from "../../../../services/tax/tax.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tax} from "../../../../models/tax";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../../services/authentication/authentication.service";

@Component({
    selector: 'app-summarycart',
    templateUrl: './summary-cart.component.html',
    styleUrls: ['./summary-cart.component.scss']
})
export class SummaryCartComponent implements OnInit {
    cartService: CartService;
    authService: AuthenticationService;
    constructor(private http:HttpClient,private router:Router) {
        this.cartService = CartService.getInstance(http);
        this.authService = AuthenticationService.getInstance(http);
    }

    ngOnInit(): void {
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
