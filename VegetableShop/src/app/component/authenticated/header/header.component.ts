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

    logOut() {
        const btn_logOut = document.querySelector('#logOutLink');
        this.auth.logout();
        this.router.navigateByUrl('/home').then(e => {
        });
    }

    onWindowScroll() {
        let element = document.querySelector('.navbar') as HTMLElement;
        if (window.pageYOffset > element.clientHeight) {
            element.classList.add('navbar-inverse');
        } else {
            element.classList.remove('navbar-inverse');
        }
    }

    //search
    onKeydown(event) {
        const search_box = document.querySelector('.search_box');
        let txt: string = event.target.value;
        search_box.innerHTML = '';
        if (txt !== '') {
            search_box.classList.remove('d-none');
            this.productService.searchProduct(txt).then(res => {
                console.log(res);
                res.map(item =>{
                    const search_item = document.createElement('a');
                    search_item.classList.add('search_item');
                    search_item.innerText = item['name'];
                    search_item.href = "" + item['id']
                    search_item.style.margin = "10px";
                    search_item.style.padding= "10px";
                    search_item.style.background = 'pink'
                    search_item.style.borderRadius = "50px";
                    search_box.append(search_item)
                })
                }
            );
        } else {
            search_box.classList.add('d-none');
        }
    }

}
