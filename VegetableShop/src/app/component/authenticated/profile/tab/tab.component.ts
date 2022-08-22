import {Component, Input, OnInit} from '@angular/core';
import {Account} from "../../../../models/account";

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
    @Input() accountCurrent: Account;
    productsFavourite: any;
    productsHistory: any;

    constructor() {
    }

    ngOnInit(): void {
    }

}
