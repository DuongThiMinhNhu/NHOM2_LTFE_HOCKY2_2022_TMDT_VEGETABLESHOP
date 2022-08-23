import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ProductService} from "../../../services/product/product.service";
import {CartService} from "../../../services/cart/cart.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    // @HostListener('window:scroll', ['$event'])
    auth: AuthenticationService;
    private productService: ProductService;
    scrolled: boolean = false;
    cartService: CartService;

    constructor(private http: HttpClient, @Inject(Router) private router: Router) {
        this.auth = AuthenticationService.getInstance(http);
        this.productService = ProductService.getInstance(http);
        this.cartService = CartService.getInstance(http);
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

    logOut() {
        const btn_logOut = document.querySelector('#logOutLink');
        this.auth.logout();
        this.router.navigateByUrl('/home').then(e => {
        });
    }

    //scroll
    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20) {
            document.getElementById('nav').classList.add('sticky');
        } else {
            document.getElementById('nav').classList.remove('sticky');
        }
    }

    // result2

}
