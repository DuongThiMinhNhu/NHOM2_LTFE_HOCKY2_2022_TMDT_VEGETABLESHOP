import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

    @Input() name = "PRODUCT SINGLE";
    @Input() image = "assets/images/bg_1.jpg";

    constructor() {
    }

    ngOnInit(): void {
    }

}
