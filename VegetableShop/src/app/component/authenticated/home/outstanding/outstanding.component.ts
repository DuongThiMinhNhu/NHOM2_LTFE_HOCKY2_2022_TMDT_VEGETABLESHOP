import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {Observable, of, retry} from "rxjs";
import {Product} from "../../../../models/product";
import {ProductService} from "../../../../services/product/product.service";
import {HttpClient} from "@angular/common/http";
import {map, take} from "rxjs/operators";

@Component({
    selector: 'app-outstanding',
    templateUrl: './outstanding.component.html',
    styleUrls: ['./outstanding.component.scss']
})
@Injectable({
    providedIn: "root"
})
export class OutstandingComponent implements OnInit {
    products: Observable<Product[]>;
    productServices: ProductService;

    constructor(private httpClient: HttpClient) {
        this.productServices = ProductService.getInstance(httpClient);
        this.loadSlides();
    }

    ngAfterContentInit() {
        this.loadSlides().then(re => {
            console.log(re);
            if (re != null)
                this.products = re.pipe(map(value => {
                    return value.slice(0, 12);
                }));
        })
    }

    public loadSlides() {
        return this.productServices.doGet();
    }

    ngOnInit(): void {
    }
}