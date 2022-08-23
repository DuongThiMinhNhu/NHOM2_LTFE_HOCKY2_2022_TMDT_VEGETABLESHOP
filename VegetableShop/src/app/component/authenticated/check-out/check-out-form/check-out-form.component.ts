import {Component, OnInit, ViewChild} from '@angular/core';
import {Account} from "../../../../models/account";
import {SessionKey} from "../../../../../assets/resources/sessionkey";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Order} from "../../../../models/order";
import {CartService} from "../../../../services/cart/cart.service";

@Component({
    selector: 'app-check-out-form',
    templateUrl: './check-out-form.component.html',
    styleUrls: ['./check-out-form.component.scss']
})
export class CheckOutFormComponent implements OnInit {
    accountCurrent: Account;
    cartService: CartService;
    @ViewChild('checkoutForm')
    checkoutForm: NgForm;
    order: Order;
    constructor(private router: Router, private http: HttpClient) {
        this.accountCurrent = JSON.parse(sessionStorage.getItem(SessionKey.ACCOUNT));
        this.cartService = CartService.getInstance();
    }

    ngOnInit(): void {
    }
    onSubmit() {
        if(!this.checkoutForm.valid){
            let note: string = "";
            this.order = new Order(1, this.accountCurrent.id, new Date(), this.cartService.getTotalPriceAndDiscount(), note, true);
            sessionStorage.setItem(SessionKey.ORDER, JSON.stringify(this.order));
            this.router.navigateByUrl('/bill').then(e => {});
        }
    }
}
