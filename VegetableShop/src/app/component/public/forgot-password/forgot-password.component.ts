import {Component, OnInit, ViewChild} from '@angular/core';
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Account} from "../../../models/account";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
    @ViewChild('forgotPassForm')
    forgotPassForm: NgForm;
    authService: AuthenticationService;

    constructor(http: HttpClient, private router: Router,private titleService : Title) {
        this.authService = AuthenticationService.getInstance(http);
        emailjs.init("ZMVQv0o6piZ7BRGkb");
        titleService.setTitle('Forgot password');
    }

    ngOnInit(): void {
    }

    onSubmit() {
        let email = this.forgotPassForm.value.email;
        let code: string = this.randomCode(6);
        if (this.authService.checkTheSameEmail(email)) {
            const contactParam = {
                subject: 'LINK CHANGE PASSWORD',
                to_name: "",
                code: code,
                to_mail: this.forgotPassForm.value.email,
            }

            emailjs.send("service_jxun1gl",
                "template_2gm6eat",
                contactParam).then(
                (res) => {
                    this.authService.doGetByEmail(email).then(
                        res => {
                            console.log(res)
                            return res.subscribe(value => {
                                sessionStorage.setItem('emailTemp', value.gmail);
                                sessionStorage.setItem('oldPass', value.password);
                                sessionStorage.setItem('code', code);
                            })

                        }
                    );
                    alert("SUCCESS")
                    this.router.navigateByUrl('/changePassword').then(e => {
                    });
                },
                function (err) {
                    alert("FAIL ")
                    console.log(err)
                }
            )

        } else {
            alert("The email does not exist. Please try again!")
        }

    }

    randomCode(length): string {
        let output = "";
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < length; i++)
            output += characters.charAt(Math.floor(Math.random() * characters.length));

        return output;
    }

}
