import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-check-out',
    templateUrl: './check-out.component.html',
    styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

    constructor(private titleService : Title) {
        titleService.setTitle('CheckOut');
    }
    ngOnInit(): void {
    }

}
