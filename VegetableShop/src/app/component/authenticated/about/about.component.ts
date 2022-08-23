import {Component, OnInit} from '@angular/core';
import {BannerStorage} from "../../../../assets/resources/bannerstorage";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    namePage = BannerStorage.BLOG.name;
    imageBg = BannerStorage.BLOG.image;

    constructor(private titleService : Title) {
        titleService.setTitle('About');
    }

    ngOnInit(): void {
    }

    function($) {
        "use strict";
        //  TESTIMONIALS CAROUSEL HOOK
        $('#customers-testimonials').owlCarousel({
            loop: true,
            center: true,
            items: 3,
            margin: 0,
            autoplay: true,
            dots: true,
            autoplayTimeout: 8500,
            smartSpeed: 450,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1170: {
                    items: 3
                }
            }
        });
    };
}
