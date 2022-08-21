import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class HomeService {
    public allSlides

    constructor(private http: HttpClient) {
    }
}
