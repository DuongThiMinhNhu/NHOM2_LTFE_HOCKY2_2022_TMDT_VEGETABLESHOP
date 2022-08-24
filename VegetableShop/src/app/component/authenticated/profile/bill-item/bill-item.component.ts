import {Component, Input, OnInit} from '@angular/core';
import {Bill} from "../../../../models/bill";

@Component({
    selector: 'app-bill-item',
    templateUrl: './bill-item.component.html',
    styleUrls: ['./bill-item.component.scss']
})
export class BillItemComponent implements OnInit {
   @Input() bill:Bill;
    constructor() {
    }

    ngOnInit(): void {
    }

    getDate() {
        let date = new Date();
        return (date.getDay()<9?"0"+date.getDay():date.getDay())+"/"+(date.getMonth()<9?"0"+date.getMonth():date.getMonth())+"/"+date.getFullYear();
    }
}
