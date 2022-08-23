import {Component, OnInit} from '@angular/core';
import {Account} from "../../../models/account";
import {SessionKey} from "../../../../assets/resources/sessionkey";
import {HeartService} from "../../../services/heart/heart.service";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    accountCurrent: Account;
    constructor(private titleService : Title) {
        titleService.setTitle('Profile');
        this.accountCurrent = JSON.parse(sessionStorage.getItem(SessionKey.ACCOUNT));
    }

    ngOnInit(): void {
    }

}
