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
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private  router: Router, private authService: AuthenticationService) { }
  onSubmit (){
    if(!this.registerForm.valid){
      console.log('invalid data');
      return;
    }
    console.log(this.registerForm.value);
  }

  ngOnInit(): void {
  }

}
