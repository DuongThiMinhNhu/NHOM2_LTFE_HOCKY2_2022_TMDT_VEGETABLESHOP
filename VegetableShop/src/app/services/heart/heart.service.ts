import {Injectable} from '@angular/core';
import {SessionKey} from "../../../assets/resources/sessionkey";

@Injectable({
    providedIn: 'root'
})
export class HeartService {
    heartList: number[];
    private static instance: HeartService;

    constructor() {
        let items = JSON.parse(sessionStorage.getItem(SessionKey.HEART));
        this.heartList = [];
        if(items!=null)
        for(let i = 0;i<items.length;i++){
            this.heartList.push(items[i]);
        }
    }

    static getInstance(): HeartService {
        if (HeartService.instance == null) HeartService.instance = new HeartService();
        return HeartService.instance;
    }

    like(idAccount: number, idProduct: number) {
        this.heartList.push(idProduct);
        sessionStorage.setItem(SessionKey.HEART,JSON.stringify(this.heartList));
    }

    unlike(idAccount: number, idProduct: number) {
        this.heartList = this.removeItem(this.heartList, idProduct);
        sessionStorage.setItem(SessionKey.HEART,JSON.stringify(this.heartList));
    }

    removeItem<T>(arr: Array<T>, value: T): Array<T> {
        const index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }
}
