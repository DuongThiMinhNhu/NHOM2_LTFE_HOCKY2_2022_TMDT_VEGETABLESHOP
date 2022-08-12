import {Component, HostListener, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ProductService} from "../../../services/product/product.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @HostListener('window:scroll', ['$event'])
    private auth: AuthenticationService;
    private productService: ProductService;

    constructor(private http: HttpClient, private router: Router) {
        this.auth = AuthenticationService.getInstance(http);
        this.productService = ProductService.getInstance(http);
    }

    ngOnInit(): void {
    }

    myClickFunction(event) {
        const al = document.querySelector('nav');
        if (al.className == "menu-active") {
            al.className = "navbar navbar-expand-lg navbar-light";
        } else {
            al.className = "menu-active";
        }

    }
  }

  logOut(){
    const btn_logOut = document.querySelector('#logOutLink');
    this.auth.logout();
    this.router.navigateByUrl('/home').then(e => {});
  }
    //search
    onKeydown(event) {
        let txt: string = event.target.value;
        if (txt !== '') {
            console.log(this.productService.searchProduct(txt));
        }
    }

}
