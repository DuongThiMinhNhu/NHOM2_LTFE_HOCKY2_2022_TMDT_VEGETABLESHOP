import {Component, OnInit, ViewChild} from '@angular/core';
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {SessionKey} from "../../../../assets/resources/sessionkey";
import {ToastService} from "ng-uikit-pro-standard";

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
    @ViewChild('forgotPassForm')
    forgotPassForm: NgForm;
    authService: AuthenticationService;

    constructor(http: HttpClient, private router: Router,private toast:ToastService,private titleService : Title) {
        this.authService = AuthenticationService.getInstance(http);
        emailjs.init("G1MVrOIFodX67QEl7");
        titleService.setTitle('Forgot password');
    }

    ngOnInit(): void {
    }

    onSubmit() {
        let email = this.forgotPassForm.value.email;
        let code: string = this.randomCode(6);
        this.authService.checkTheSameEmail(email).then(
            re=>{
                if(!re){
                    //set the parameter as per you template parameter[https://dashboard.emailjs.com/templates]
                    var templateParams = {
                        to_name: email,
                        from_name: 'VegetableShop',
                        message: 'Your code: '+code
                    };

                    //save code to session
                    sessionStorage.setItem(SessionKey.CODE,code);

                    emailjs.send('service_np1jlhe', 'template_pv7vikz', templateParams)
                        .then((response) =>{
                           this.toast.success('SUCCESS!');
                           this.router.navigateByUrl('/changePassword')
                        }, (error)=> {
                            this.toast.error('FAILED!');
                        });
                } else {
                    this.toast.error("The email does not exist. Please try again!")
                }
            }
        )

    }

    randomCode(length): string {
        let output = "";
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < length; i++)
            output += characters.charAt(Math.floor(Math.random() * characters.length));

        return output;
    }

}
