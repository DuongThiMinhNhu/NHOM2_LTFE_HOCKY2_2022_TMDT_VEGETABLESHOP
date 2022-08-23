import {Component, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {HeartService} from "../../../../../services/heart/heart.service";
import {SessionKey} from "../../../../../../assets/resources/sessionkey";

@Component({
    selector: 'app-heart',
    templateUrl: './heart.component.html',
    styleUrls: ['./heart.component.scss'],
})
export class HeartComponent implements OnInit {
    @Input() width_heart: number = 100;
    @Input() height_heart: number = 100;
    @Input() productSelected: number;
    selected: boolean;
    heartServices: HeartService = HeartService.getInstance();

    ngOnInit(): void {
        let items = JSON.parse(sessionStorage.getItem(SessionKey.HEART));
        if(items!=null)
        for(let i=0;i<items.length;i++){
            if(items[i]==this.productSelected.toString()){
                this.selected = true;
                break;
            }
        }
    }

    catchSelect() {
        this.selected = !this.selected;
        if (this.selected) {
            this.heartServices.like(1, this.productSelected);
        } else {
            this.heartServices.unlike(1, this.productSelected);
        }

    }
}
