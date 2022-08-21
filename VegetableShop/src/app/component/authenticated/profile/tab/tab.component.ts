import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
    productsFavourite: any;
    productsHistory: any;

    constructor() {
    }

    ngOnInit(): void {
    }

}
