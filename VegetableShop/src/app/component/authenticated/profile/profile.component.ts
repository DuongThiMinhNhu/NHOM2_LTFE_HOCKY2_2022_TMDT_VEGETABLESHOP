import {Component, OnInit} from '@angular/core';
import {Account} from "../../../models/account";
import {SessionKey} from "../../../../assets/resources/sessionkey";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    accountCurrent: Account;
    constructor() {
        this.accountCurrent = JSON.parse(sessionStorage.getItem(SessionKey.ACCOUNT));
    }

    ngOnInit(): void {
    }

}
