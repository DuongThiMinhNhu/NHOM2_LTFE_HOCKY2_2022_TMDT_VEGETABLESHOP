import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Account} from "../../models/account";
import {HandleJsonService} from "../handlejson/handlejson.service";
import {JsonFile} from "../../../assets/resources/jsonfile";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  result: Observable<Account[]>;
  handleJson:HandleJsonService<Account>;

  private static instance:AuthenticationService;
  constructor(private http: HttpClient) {
    this.handleJson = HandleJsonService.getInstance(http,new Account());
    this.result = this.handleJson.doGet();
  }
  public static getInstance(httpClient: HttpClient):AuthenticationService{
    if(this.instance==null) this.instance = new AuthenticationService(httpClient);
    return this.instance;
  }


  public setAcc(acc: Account){
    localStorage.setItem("account", JSON.stringify(acc));
  }

  public getAcc() {
    return localStorage.getItem('account');
  }

  public removeAcc(){
    localStorage.removeItem('account');
  }

  public isLoggedIn(): boolean{
    return this.getAcc() != null;
  }

  public logout() {
    this.removeAcc();
  }

  public login(email: string, password: string): void {
    var accT: Account = null;
    this.result.forEach(data => {
      data.forEach((acc: Account) => {
        if(acc.gmail === email && acc.password === password){
          accT = acc.getInstance(acc);
          localStorage.setItem("account", JSON.stringify(accT));
        }
      })
    })
  }

  // public register(fullname: string, email: string, password: string): void {
  //   let accTemp: Account = new Account();
  //     this.accounts.forEach((acc:Account) => {
  //       if(acc.gmail === email){
  //         alert("email is exist");
  //       }
  //     })
  //     accTemp.gmail = email;
  //     accTemp.username = fullname;
  //     accTemp.password = password;
  //     console.log(this.accounts, accTemp);
  //     this.accounts.push(accTemp);
  //     // localStorage.setItem("accounts", JSON.stringify(this.accounts));
  // }

}
