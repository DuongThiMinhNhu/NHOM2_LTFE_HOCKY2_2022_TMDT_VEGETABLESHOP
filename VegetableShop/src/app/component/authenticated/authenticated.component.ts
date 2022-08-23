import {Component, HostListener, OnInit} from '@angular/core';

@Component({
    selector: 'app-authenticated',
    templateUrl: './authenticated.component.html',
    styleUrls: ['./authenticated.component.scss']
})
export class AuthenticatedComponent implements OnInit {
    isShow: boolean;
    topPosToStartShowing = 100;

    constructor() {
    }

    ngOnInit(): void {
    }
    onActivate(event) {
        window.scroll(0,0);
    }
    @HostListener('window:scroll')
    checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        console.log('[scroll]', scrollPosition);
        if (scrollPosition >= this.topPosToStartShowing) {
            this.isShow = true;
        } else {
            this.isShow = false;
        }
    }
    gotoTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
}
