import { Injectable } from '@angular/core';
import {Bill} from "../../models/bill";
import {CartService} from "../cart/cart.service";
import {HttpClient} from "@angular/common/http";
import {Tax} from "../../models/tax";
import {TaxService} from "../tax/tax.service";

@Injectable({
  providedIn: 'root'
})
export class BillService {
  private static instance;
  private billList:Bill[]
  constructor(private http:HttpClient) {
    this.billList = [];
  }

  static getInstance(http:HttpClient){
    if(this.instance==null) this.instance = new BillService(http);
    return this.instance;
  }
  public addBill(bill:Bill){
    this.billList.push(bill);
  }
  public deleteBill(bill:Bill){
    this.billList = this.removeItem(this.billList,bill);
  }
  public getAllBill():Bill[]{
   return this.billList;
  }
  removeItem<T>(arr: Array<T>, value: T): Array<T> {
    const index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
}
