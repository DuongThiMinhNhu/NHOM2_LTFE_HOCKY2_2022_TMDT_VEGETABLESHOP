import {
    AfterViewInit,
    Component,
    HostListener,
    Input,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    OnInit,
} from '@angular/core';
import {SBItemComponent} from './sb-item';
import {SPACE} from '../../../free/utils/keyboard-navigation';
import {BooleanInput, coerceBooleanProperty} from '@angular/cdk/coercion';

@Component({
    exportAs: 'sbItemHead',
    selector: 'mdb-item-head, mdb-accordion-item-head',
    templateUrl: 'sb-item.head.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SBItemHeadComponent implements OnInit, AfterViewInit {
    @Input()
    get isDisabled(): boolean {
        return this._isDisabled;
    }

    set isDisabled(value: BooleanInput) {
        this._isDisabled = coerceBooleanProperty(value);
    }

    private _isDisabled = false;

    @Input() customClass: string;

    @Input()
    get indicator(): boolean {
        return this._indicator;
    }

    set indicator(value: BooleanInput) {
        this._indicator = coerceBooleanProperty(value);
    }

    private _indicator = true;

    public id = `mdb-accordion-`;
    ariaExpanded = false;
    ariaControls = '';

    constructor(private sbItem: SBItemComponent, private _cdRef: ChangeDetectorRef) {
        this.id = `mdb-accordion-head-${this.sbItem.idModifier}`;
    }

    @HostListener('keydown', ['$event']) onKeyDown(event: any) {
        if (event.keyCode === SPACE) {
            this.toggleClick(event);
        }
    }

    toggleClick(event: any) {
        event.preventDefault();
        if (!this.isDisabled) {
            this.sbItem.collapsed = !this.sbItem.collapsed;
            this.sbItem.toggle(this.sbItem.collapsed);
            this.ariaExpanded = !this.ariaExpanded;
        }
        this._cdRef.markForCheck();
    }

    ngOnInit() {
        this.ariaExpanded = this.sbItem.collapsed ? false : true;
    }

    ngAfterViewInit() {
        setTimeout(() => {
            if (this.sbItem.body) {
                this.ariaControls = this.sbItem.body.id;
                this.sbItem.body.ariaLabelledBy = this.id;
            }
        }, 0);
    }
}
