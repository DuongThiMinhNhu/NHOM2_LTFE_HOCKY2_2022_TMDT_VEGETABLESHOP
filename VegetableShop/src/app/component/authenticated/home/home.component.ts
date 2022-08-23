import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {ProductService} from "../../../services/product/product.service";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private _jsonURL = 'assets/data/slides.json';
    images: any = [];

    constructor(private http: HttpClient, @Inject(ProductService) private authService: AuthenticationService ,private titleService : Title) {
    titleService.setTitle('Home');
        this.getJSON().subscribe(data => {
            this.images = data;
        });

    }

    public getJSON(): Observable<any> {
        return this.http.get(this._jsonURL);
    }

    ngOnInit(): void {

    }


}
