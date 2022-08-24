import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Account} from "../../../models/account";
import {JsonFile} from "../../../../assets/resources/jsonfile";
import {SessionKey} from "../../../../assets/resources/sessionkey";
import {Title} from "@angular/platform-browser";
import {ToastService} from "ng-uikit-pro-standard";

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

    constructor(private router: Router, private http: HttpClient,private toast:ToastService,private titleService : Title) {
        this.authService = AuthenticationService.getInstance(this.http);
        titleService.setTitle('Change password');
    }

    ngOnInit(): void {
    }

    onSubmit() {
        let emailTemp: string = sessionStorage.getItem('emailTemp');
        this.authService.doGetByEmail(emailTemp).then(
            res => {
                console.log(res)
                return res.subscribe(value => {
                    if (this.changePassForm.value.code === sessionStorage.getItem(SessionKey.CODE)) {
                        let newPassword = this.changePassForm.value.newPassword;
                        let retypePassword = this.changePassForm.value.retNewPassword;
                        if (newPassword === retypePassword) {
                           let acc = JSON.parse(this.authService.getAcc());
                           acc.password = this.authService.encryptPass(newPassword);
                           this.authService.setAcc(acc);
                            this.router.navigateByUrl('/login')
                        } else {
                            this.toast.error("The old password does not match")
                        }
                    } else {
                        this.toast.error("The code is wrong")
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
