import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {Title} from "@angular/platform-browser";

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

    constructor(private router: Router, private authService: AuthenticationService,private titleService : Title) {
        titleService.setTitle('Register');
    }

    onSubmit() {
        this.authService.register(this.registerForm.value.fullname, this.registerForm.value.email, this.registerForm.value.password);
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
