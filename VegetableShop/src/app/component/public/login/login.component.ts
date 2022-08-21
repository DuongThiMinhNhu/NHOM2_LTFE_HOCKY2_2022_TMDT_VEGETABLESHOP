import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {Account} from "../../../models/account";
import {HttpClient} from "@angular/common/http";
import * as http from "http";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    @ViewChild('loginForm')
    loginForm: NgForm;
    show: boolean = false;
    private auth: AuthenticationService;

    constructor(private router: Router, private http: HttpClient) {
        this.auth = AuthenticationService.getInstance(this.http);
    }

    onSubmit() {
        this.auth.login(this.loginForm.value.email, this.loginForm.value.password);
        if (this.auth.isLoggedIn()) {
            console.log(this.auth.getAcc());
            this.router.navigateByUrl('/home').then(e => {
            });
        } else {
            alert("The account is not exist");
        }
    }

    ngOnInit(): void {
    }

    passwordClick() {
        this.show = !this.show;
    }

}
