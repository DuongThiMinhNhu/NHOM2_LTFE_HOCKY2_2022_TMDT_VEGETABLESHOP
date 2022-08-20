import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {catchError, Observable} from "rxjs";
import {Account} from "../../models/account";
import {HandleJsonService} from "../handlejson/handlejson.service";
import {map} from "rxjs/operators";
import {JsonFile} from "../../../assets/resources/jsonfile";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  result: Observable<Account[]>;
  handleJson: HandleJsonService<Account>;
  accounts: Account[];


  private static instance: AuthenticationService;

  constructor(private http: HttpClient) {
    this.handleJson = new HandleJsonService<Account>(http, new Account());
    this.loadAccount().then(re=>{
      this.result = re;
      this.initAccount();
    });
  }

  public async loadAccount() {
    return await this.handleJson.doGet()
  }

  public static getInstance(httpClient: HttpClient): AuthenticationService {
    if (this.instance == null) this.instance = new AuthenticationService(httpClient);
    return this.instance;
  }

  public initAccount(): void {
    this.result.forEach(data => {
      this.accounts = data;
      localStorage.setItem("accounts", JSON.stringify(data));
    })
  }

  public async doGetByEmail(email: string): Promise<Observable<Account>> {
    return this.handleJson.doGet().then(
        res => {
          return res.pipe(
              map(
                  value => {
                    return value.find<Account>((item): item is Account => item.gmail === email
                    )
                  }
              )
          )
        }
    )
  }

  public setAcc(acc: Account) {
    localStorage.setItem("account", JSON.stringify(acc));
  }

  public getAcc() {
    return localStorage.getItem('account');
  }

  public removeAcc() {
    localStorage.removeItem('account');
  }

  public isLoggedIn(): boolean {
    return this.getAcc() != null;
  }

  public logout() {
    this.removeAcc();
  }

  public getAccountSize(): number {
    return this.accounts.length;
  }

  public login(email: string, password: string): void {
    var accT: Account = null;
    this.accounts.forEach((acc: Account) => {
      if (acc.gmail === email && acc.password === password) {
        accT = acc.getInstance(acc);
        localStorage.setItem("account", JSON.stringify(accT));
      }
    })
  }

  public checkTheSameEmail(email: string): boolean {
    let output: boolean = false;
    this.accounts.forEach((acc: Account) => {
      if (acc.gmail === email) {
        output = true;
      }
    })
    return output;
  }

  public register(fullname: string, email: string, password: string): void {
    let accT: Account = null;

    if (this.checkTheSameEmail(email)) {
      alert("The email is exist");
    } else {
      accT = new Account(this.accounts[this.accounts.length - 1].id + 1,
          fullname,
          fullname,
          password,
          1,
          "",
          new Date(),
          "",
          email,
          "",
          "",
          true)
      this.accounts.push(accT)
      this.setAcc(accT);
      localStorage.setItem("accounts", JSON.stringify(this.accounts));

    //   // const fs = require('fs');
    //   //     fs.writeFile(JsonFile.ACCOUNTS, JSON.stringify(this.accounts), 'utf8', (err => {}));
    }
  }

  // public forgetPassword(){
  //   this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=[API_KEY]`,{
  //     "requestType":"PASSWORD_RESET",
  //     "email":"[user@example.com]"
  //   });
  // }
}