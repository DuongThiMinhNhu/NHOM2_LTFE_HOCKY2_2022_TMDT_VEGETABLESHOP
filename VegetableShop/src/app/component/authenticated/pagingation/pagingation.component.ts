import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {IPagingation} from "../../interface/ipagingation";

@Component({
    selector: 'app-pagingation',
    templateUrl: './pagingation.component.html',
    styleUrls: ['./pagingation.component.scss']
})
export class PagingationComponent implements OnInit, IPagingation {
    @Input() current: number = 0
    @Input() total: number = 0
    @Input() limit: number = 16
    //EventEmitter là lớp định kỳ phát ra (emit) các sự kiện (Events) khiến các Listener Object được gọi.
    @Output() goTo: EventEmitter<number> = new EventEmitter<number>()
    @Output() next: EventEmitter<number> = new EventEmitter<number>()
    @Output() previous: EventEmitter<number> = new EventEmitter<number>()
    public pages: number[] = [1, 2, 3]
    public offset: number;
    public numOfPage: number = 32;

    constructor() {
        this.numOfPage = Math.ceil(this.total / this.limit);
        this.offset = (this.current - 1) * this.limit;
    }

    public onGoTo(page: number): void {
        this.goTo.emit(page)
    }

    public onNext(page: number): void {
        this.next.emit(this.current)
    }

    public onPrevious(page: number): void {
        this.previous.next(this.current)
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.total == null) this.total = 100;
        this.numOfPage = Math.ceil(this.total / this.limit);
        if ((changes.current && changes.current.currentValue) ||
            (changes.numOfPage && changes.numOfPage.currentValue)) {
            this.pages = this.getPages(this.current, this.numOfPage);
        }
    }

    private getPages(current: number, numOfPage: number): number[] {
        if (numOfPage <= 3) {
            return [...Array(numOfPage).keys()].map(x => ++x)
        }
        if (current > 3) {
            if (current >= numOfPage - 2) {
                return [numOfPage - 2, numOfPage - 1, numOfPage]
            } else {
                return [current - 1, current, current + 1]
            }

        }
        return [1, 2, 3]

    }

    ngOnInit(): void {
        this.numOfPage = Math.ceil(this.total / this.limit);
    }

}
