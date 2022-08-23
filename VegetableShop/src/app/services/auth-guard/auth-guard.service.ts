import { Injectable } from '@angular/core';
// import {JwtHelperService} from "@auth0/angular-jwt";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Account} from "../../models/account";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  account:Account;
  constructor(public route: Router) {
     this.account = JSON.parse(sessionStorage.getItem("account"));
  }

  canActivate(): boolean {
    if(this.account!=null){
      return true;
    }else{
      this.route.navigate(['login']);
      return false;
    }
  }
}
