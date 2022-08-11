import {Component, HostListener, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  private auth: AuthenticationService;
  constructor(private http: HttpClient, private router: Router) {
    this.auth = AuthenticationService.getInstance(http);
  }

  ngOnInit(): void {
  }
  myClickFunction(event) {
    const al = document.querySelector('nav');
    if(al.className == "menu-active"){
      al.className = "navbar navbar-expand-lg navbar-light";
    }
    else{
      al.className = "menu-active";
    }

  }

  logOut(){
    const btn_logOut = document.querySelector('#logOutLink');
    this.auth.logout();
    this.router.navigateByUrl('/home').then(e => {});
  }
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }

}
