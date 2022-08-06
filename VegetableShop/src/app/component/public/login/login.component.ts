import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "../../../services/authentication/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm')
  loginForm: NgForm;
  constructor(private router: Router, private auth: AuthenticationService) { }
  onSubmit (){
    // if(!this.loginForm.valid){
    //   console.log('invalid data');
    //   return;
    // }
    // console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value.email, this.loginForm.value.password);
  }

  ngOnInit(): void {
  }

}
