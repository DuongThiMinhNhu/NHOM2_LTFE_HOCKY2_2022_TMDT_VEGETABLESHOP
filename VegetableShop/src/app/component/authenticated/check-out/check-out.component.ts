import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {BillService} from "../../../services/bill/bill.service";
import {HttpClient} from "@angular/common/http";
import {SessionKey} from "../../../../assets/resources/sessionkey";
import {Router} from "@angular/router";
import {Bill} from "../../../models/bill";
import {CartService} from "../../../services/cart/cart.service";
import {Account} from "../../../models/account";

@Component({
    selector: 'app-check-out',
    templateUrl: './check-out.component.html',
    styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {
    billService:BillService;
    cartService:CartService;
    account:Account;
    constructor(private router:Router,private http:HttpClient,private titleService : Title) {
        this.billService = BillService.getInstance(http);
        this.cartService = CartService.getInstance(http);
        this.account = JSON.parse(sessionStorage.getItem(SessionKey.ACCOUNT));

        titleService.setTitle('CheckOut');
    }
    ngOnInit(): void {
    }

    submit() {
        let bill = new Bill(CartService.getCart(),"baking","complete",this.account.address);
        this.billService.addBill(bill);
        this.router.navigate(["bill"]);
    }
}
