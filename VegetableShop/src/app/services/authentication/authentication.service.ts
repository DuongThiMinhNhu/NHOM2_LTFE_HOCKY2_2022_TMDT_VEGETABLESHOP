import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, lastValueFrom, Observable} from "rxjs";
import {Account} from "../../models/account";
import {HandleJsonService} from "../handlejson/handlejson.service";
import {map} from "rxjs/operators";
import {SessionKey} from "../../../assets/resources/sessionkey";
import {ToastService} from "ng-uikit-pro-standard";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    result: Observable<Account[]>;
    handleJson: HandleJsonService<Account>;
    shajs = require('sha.js');
    private static instance: AuthenticationService;
    constructor(private http: HttpClient) {
        this.handleJson = new HandleJsonService<Account>(http, new Account());
    }

    public static getInstance(httpClient: HttpClient): AuthenticationService {
        if (this.instance == null) this.instance = new AuthenticationService(httpClient);
        return this.instance;
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
        sessionStorage.setItem("account", JSON.stringify(acc));
    }

    public getAcc() {
        return sessionStorage.getItem('account');
    }

    public removeAcc() {
        sessionStorage.removeItem('account');
    }

    public isLoggedIn(): boolean {
        return this.getAcc() != null;
    }

    public logout() {
        this.removeAcc();
    }

    public async login(email: string, password: string): Promise<boolean> {
        let listAcc = await lastValueFrom(await this.handleJson.doGetByName(email));
        if(listAcc.length!=0){
            if (listAcc[0].password == this.encryptPass(password)) {
                sessionStorage.setItem(SessionKey.ACCOUNT, JSON.stringify(listAcc[0]));
                return true;
            }
        }
        return false;
    }

    public async checkTheSameEmail(email: string): Promise<boolean> {
        let check = false;
        let listAcc = await lastValueFrom(await this.handleJson.doGetByName(email));
       if(listAcc.length>1) check = true;
        return check;
    }

    public async register(fullname: string, email: string, password: string): Promise<void> {
        let accT: Account = null;

        if (await this.checkTheSameEmail(email)) {
            alert("The email is exist");
        } else {
            let id = await lastValueFrom(await this.handleJson.count());
            accT = new Account(id,
                fullname,
                fullname,
                this.encryptPass(password),
                1,
                "",
                new Date(),
                "",
                email,
                "",
                "",
                true)
            this.setAcc(accT);
        }
    }

    // public forgetPassword(){
    //   this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=[API_KEY]`,{
    //     "requestType":"PASSWORD_RESET",
    //     "email":"[user@example.com]"
    //   });
    // }

    public encryptPass(text: string): string{
        return this.shajs('sha256').update(text).digest('hex');
    }

}