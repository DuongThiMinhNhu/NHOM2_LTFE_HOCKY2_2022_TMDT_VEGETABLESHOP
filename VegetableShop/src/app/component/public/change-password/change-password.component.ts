import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Account} from "../../../models/account";

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
    @ViewChild('changePassForm')
    changePassForm: NgForm;
    show: boolean = false;
    show2: boolean = false;
    show3: boolean = false;
    private authService: AuthenticationService;

    constructor(private router: Router, private http: HttpClient) {
        this.authService = AuthenticationService.getInstance(this.http);
    }

    ngOnInit(): void {
    }

    onSubmit() {
        let emailTemp: string = sessionStorage.getItem('emailTemp');
        this.authService.doGetByEmail(emailTemp).then(
            res => {
                console.log(res)
                return res.subscribe(value => {
                    if (this.changePassForm.value.code === sessionStorage.getItem('code')) {
                        if (sessionStorage.getItem('oldPass') === this.changePassForm.value.oldPassword) {
                            if (this.changePassForm.valid) {
                                value.password = this.changePassForm.value.newPassword;
                                this.authService.accounts.findIndex((item => {
                                    if (item.id === value.id) {
                                        item = value;
                                    }
                                }))
                                // this.authService.accounts.push(value);
                                sessionStorage.setItem('emailTemp', '');
                                sessionStorage.setItem('oldPass', '');
                                sessionStorage.setItem('code', '');
                                sessionStorage.setItem('accounts', JSON.stringify(this.authService.accounts));
                                this.router.navigateByUrl('/').then(e => {
                                });
                            }
                        } else {
                            alert("The old password does not match")
                        }
                    } else {
                        alert("The code is wrong")
                    }

                })

            }
        );
    }

    passwordClick() {
        this.show = !this.show;
    }

    passwordClick2() {
        this.show2 = !this.show2;
    }

    passwordClick3() {
        this.show3 = !this.show3;
    }

}
