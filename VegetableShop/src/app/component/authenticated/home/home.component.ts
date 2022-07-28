import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private _jsonURL = 'assets/data/slides.json';
    private _jsonURLCa = 'assets/data/categorynhu.json';
    images: any = [];
    categorys: any = [];
    constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
         this.images = data;
        });
        this.getJSON1().subscribe(data => {
            this.categorys = data;
        });
    }

    public getJSON(): Observable<any> {
        return this.http.get(this._jsonURL);
    }
    public getJSON1(): Observable<any> {
        return this.http.get(this._jsonURLCa);
    }

    ngOnInit(): void {
    }

}
