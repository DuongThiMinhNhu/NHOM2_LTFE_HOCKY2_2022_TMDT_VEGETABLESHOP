import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {Account} from "../../../models/account";
import {HttpClient} from "@angular/common/http";
import * as http from "http";
import {SessionKey} from "../../../../assets/resources/sessionkey";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    @ViewChild('loginForm')
    loginForm: NgForm;
    show: boolean = false;
    private auth: AuthenticationService;

    constructor(private router: Router, private http: HttpClient) {
        this.auth = AuthenticationService.getInstance(this.http);
    }

    onSubmit() {
        this.auth.login(this.loginForm.value.email, this.loginForm.value.password);
        if (this.auth.isLoggedIn()) {
            console.log(this.auth.getAcc());
            sessionStorage.setItem(SessionKey.ACCOUNTS, "");
            this.router.navigateByUrl('/home').then(e => {
            });
        } else {
            alert("The account is not exist");
        }
    }

    ngOnInit(): void {
    }

    passwordClick() {
        this.show = !this.show;
    }
    // ngAfterViewInit() {
    //
    // }
    onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        console.log("hi")
        var profile = googleUser.getBasicProfile();
        let name =  profile.getName();
        let familyname =  profile.getFamilyName();
        let imgUrl = profile.getImageUrl();
        let email = profile.getEmail();
        console.log(name+" - "+familyname+" - "+imgUrl+" - "+email)
        // The ID token you need to pass to your backend:
        // var id_token = googleUser.getAuthResponse().id_token;
        // console.log("ID Token: " + id_token);
        // let posting = $.post("${pageContext.request.contextPath}/doLoginGoogle",{name:name,familyname:familyname,imgUrl:imgUrl,email:email});
        // posting.done(function (data){
        //     if (confirm("You want login by current google?") === true) {
        //         alert("login google success!");
        //         window.location.replace("${pageContext.request.contextPath}/user-home");
        //     }
        // });
        //facebook
        // Get the modal
        //var modal = document.getElementById('id01');
    }
    public onFailure() {
        console.log("failed")
    }

}
