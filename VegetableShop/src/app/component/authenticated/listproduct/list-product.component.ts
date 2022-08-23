import {Component, Injectable, OnInit, Input} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../../models/product";

@Component({
    selector: 'app-list-product',
    templateUrl: './list-product.component.html',
    styleUrls: ['./list-product.component.scss']
})
@Injectable({
    providedIn: "root"
})
export class ListProductComponent implements OnInit {
    @Input() row: number;
    @Input() column: number;
    @Input() products: Observable<Product[]>;

    constructor(){
    }

    ngOnInit(): void {
    }
    onActivate(event) {
        location.reload();
        window.scroll(0,0);
    }

}
