import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {LoadJsonService} from "../load-json/load-json.service";
import * as Util from "util";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 public categorys : Category[] = [];
    private behaviorSubject: BehaviorSubject<any> = new BehaviorSubject('');
    public category$: Observable<any> = this.behaviorSubject.asObservable();
    constructor(private httpData: LoadJsonService,private paginationService: PaginationService) {
        this.httpData.getData("category.json").subscribe(value => {
            Util.convertObj2BlogArr(value.blog, this.blogs);
            console.log(this.blogs);
            // }
        })
}
