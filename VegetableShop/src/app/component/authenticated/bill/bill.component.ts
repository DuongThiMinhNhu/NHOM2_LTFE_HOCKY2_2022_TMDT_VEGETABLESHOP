import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {BillService} from "../../../services/bill/bill.service";
import {CartService} from "../../../services/cart/cart.service";
import {HttpClient} from "@angular/common/http";
import {Cart} from "../../../models/cart";
import {Bill} from "../../../models/bill";
import {Account} from "../../../models/account";
import {JsonFile} from "../../../../assets/resources/jsonfile";
import {SessionKey} from "../../../../assets/resources/sessionkey";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  billServices:BillService;
  cartService:CartService;
  account:Account;
  constructor(private http:HttpClient,private titleService : Title) {
    this.billServices = BillService.getInstance(http);
    this.cartService = CartService.getInstance(http);
    this.cartService.getShippingByWeight();
    this.account = JSON.parse(sessionStorage.getItem(SessionKey.ACCOUNT));
    titleService.setTitle('Bill');
  }
  getNewBill():Bill{
    return this.billServices.getAllBill()[this.billServices.getAllBill().length-1];
  }
  ngOnInit(): void {
  }
  getDate() {
    let date = new Date();
    return (date.getDay()<9?"0"+date.getDay():date.getDay())+"/"+(date.getMonth()<9?"0"+date.getMonth():date.getMonth())+"/"+date.getFullYear();
  }
}
