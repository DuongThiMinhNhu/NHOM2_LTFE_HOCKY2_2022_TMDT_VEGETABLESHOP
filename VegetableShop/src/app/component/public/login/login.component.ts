import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm')
  loginForm: NgForm;
  constructor(private router: Router) { }
  onSubmit (){
    if(!this.loginForm.value){
      console.log('invalid data');
      return;
    }
    console.log(this.loginForm.value);
  }

  ngOnInit(): void {
  }

}
