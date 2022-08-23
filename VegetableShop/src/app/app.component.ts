import {Component, OnInit} from '@angular/core';
import {NavigationEnd, RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterEvent} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent{
    title = 'Vegetable Shop';
    loading: boolean;
    constructor(private router:Router) {
        this.loading = false;
        router.events.subscribe((event:RouterEvent)=>{
            if(event instanceof RouteConfigLoadStart){
                this.loading = true;
            }else if(event instanceof RouteConfigLoadEnd){
                this.loading = false;
            }
        })
    }


}
