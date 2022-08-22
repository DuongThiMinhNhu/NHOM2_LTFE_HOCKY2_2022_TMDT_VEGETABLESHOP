import {Component, OnInit} from '@angular/core';
import {Account} from "../../../../models/account";
import {SessionKey} from "../../../../../assets/resources/sessionkey";

@Component({
    selector: 'app-check-out-form',
    templateUrl: './check-out-form.component.html',
    styleUrls: ['./check-out-form.component.scss']
})
export class CheckOutFormComponent implements OnInit {
    accountCurrent: Account;
    constructor() {
        this.accountCurrent = JSON.parse(sessionStorage.getItem(SessionKey.ACCOUNT));
    }

    ngOnInit(): void {
    }

}
