import {Component, Input, OnInit} from '@angular/core';
import {Post} from 'src/app/models/post';
import {Observable} from "rxjs";


@Component({
    selector: 'app-detail-post',
    templateUrl: './detail-blog.component.html',
    styleUrls: ['./detail-blog.component.scss']
})
export class DetailBlogComponent implements OnInit {
    @Input() post: Observable<Post>;

    constructor() {
    }

    ngOnInit(): void {

    }

}
