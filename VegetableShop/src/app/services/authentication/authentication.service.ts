import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
// import * as fs from "fs";
import {Account} from "../../models/account";
import {Product} from "../../models/product";
import {HandleJsonService} from "../handlejson/handlejson.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _jsonAcc = 'assets/data/accounts.json';
  private accounts: Account[];
  result: Observable<Account[]>;
  handleJson:HandleJsonService<Account>;
  private  router: Router;
  private static instance:AuthenticationService;
  constructor(private http: HttpClient) {
    this.handleJson = HandleJsonService.getInstance(http,new Account());
    this.getAccountFormJson();
  }
  public static getInstance(httpClient: HttpClient):AuthenticationService{
    if(this.instance==null) this.instance = new AuthenticationService(httpClient);
    return this.instance;
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonAcc);
  }
  public getAccountFormJson(){
    this.getJSON().subscribe(data => {
      this.accounts = data;
    })
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
    this.router.navigate(['/']);
  }

  public login(email: string, password: string): void  {
    let accTemp: Account = null;
     this.http.get(this._jsonAcc).subscribe((data: Account[]) => {
      data.forEach((acc:Account) => {
        console.log(acc);
        if(acc.gmail === email && acc.password === password){
          accTemp = acc;
        }
      })
      if(accTemp === null) {
        alert("Account is not exist");
      } else {
        this.setAcc(accTemp);
        this.router.navigateByUrl('/home').then(e => {
        });
      }
    });

  }

  public register(fullname: string, email: string, password: string): void {
    let accTemp: Account = new Account();
      this.accounts.forEach((acc:Account) => {
        if(acc.gmail === email){
          alert("email is exist");
        }
      })
      accTemp.gmail = email;
      accTemp.username = fullname;
      accTemp.password = password;
      console.log(this.accounts, accTemp);
      this.accounts.push(accTemp);
      // localStorage.setItem("accounts", JSON.stringify(this.accounts));
  }


}
