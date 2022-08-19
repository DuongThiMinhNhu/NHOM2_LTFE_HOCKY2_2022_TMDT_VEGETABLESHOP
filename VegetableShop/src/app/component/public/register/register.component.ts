import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../services/authentication/authentication.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm')
  registerForm: NgForm;
  show: boolean = false;
  show1: boolean = false;
  form: any = {
    fullname: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private  router: Router, private authService: AuthenticationService) { }
  onSubmit (){
    this.authService.register(this.registerForm.value.fullname, this.registerForm.value.email, this.registerForm.value.password);
    // console.log(JSON.stringify(this.authService.accounts[this.authService.getAccountSize() - 1]))
    if (JSON.stringify(this.authService.accounts[this.authService.getAccountSize() - 1])  == this.authService.getAcc()){
      this.router.navigateByUrl('/').then(e => {});
    }
  }

  ngOnInit(): void {
  }
  passwordClick() {
    this.show = !this.show;
  }
  password1() {
    this.show1 = !this.show1;
  }
}
