import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm')
  registerForm: NgForm;
  constructor(private  router: Router) { }
  onSubmit (){
    if(!this.registerForm.value){
      console.log('invalid data');
      return;
    }
    console.log(this.registerForm.value);
  }

  ngOnInit(): void {
  }

}
