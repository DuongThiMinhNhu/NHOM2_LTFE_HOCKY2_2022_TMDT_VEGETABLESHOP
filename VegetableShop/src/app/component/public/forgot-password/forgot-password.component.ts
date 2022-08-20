import {Component, OnInit, ViewChild} from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Account} from "../../../models/account";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  @ViewChild('forgotPassForm')
  forgotPassForm: NgForm;
  authService: AuthenticationService;
  constructor(http: HttpClient) {
    this.authService = AuthenticationService.getInstance(http);
    emailjs.init("ZMVQv0o6piZ7BRGkb")
  }

  ngOnInit(): void {
  }

  onSubmit(){
    let email = this.forgotPassForm.value.email;
    if(this.authService.checkTheSameEmail(email)){
      // const contactParam = {
      //   subject: 'LINK CHANGE PASSWORD',
      //   to_name: "",
      //   to_mail: this.forgotPassForm.value.email,
      // }
      //
      // emailjs.send("service_jxun1gl",
      //     "template_2gm6eat",
      //     contactParam).then(
      //     function (res) {
      //       alert("SUCCESS")
      //     },
      //     function (err) {
      //       alert("FAIL ")
      //       console.log(err)
      //     }
      // )
      this.authService.doGetByEmail(email).then(
          res => {
              console.log(res);
            return res.pipe(
                map((value: Account)=> {
                    console.log('value')
                    if(value.getInstance(value) == null){
                        console.log("%%%%%%$$$$$$$$")
                    } else
                  console.log(value.getInstance(value), "-------------")
                })
            )

          }
      );
    } else {
      alert("The email does not exist. Please try again!")
    }

  }

}
