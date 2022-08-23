import {Component, Input, OnInit} from '@angular/core';
import {BannerStorage} from "../../../../assets/resources/bannerstorage";

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

    @Input() name = BannerStorage.PRODUCT.name;
    @Input() image = BannerStorage.PRODUCT.image;

    constructor() {
    }

    ngOnInit(): void {
    }

}
