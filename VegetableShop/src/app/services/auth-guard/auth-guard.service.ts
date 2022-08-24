import { Injectable } from '@angular/core';
// import {JwtHelperService} from "@auth0/angular-jwt";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Account} from "../../models/account";
import {CartService} from "../cart/cart.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  account:Account;
  cartService:CartService;
  constructor(private http:HttpClient,public route: Router) {
    this.cartService = CartService.getInstance(http)
     this.account = JSON.parse(sessionStorage.getItem("account"));
  }

  canActivate(): boolean {
    if(this.account!=null&&this.cartService.sizeOfCart()>0){
      return true;
    }else{
      this.route.navigate(['login']);
      return false;
    }
  }
}
