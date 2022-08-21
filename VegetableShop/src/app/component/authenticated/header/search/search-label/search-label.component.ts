import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../../../models/product";

@Component({
    selector: 'app-search-label',
    templateUrl: './search-label.component.html',
    styleUrls: ['./search-label.component.scss']
})
export class SearchLabelComponent implements OnInit {
    @Input() product: Product;

    constructor() {
    }

    ngOnInit(): void {
    }

}
