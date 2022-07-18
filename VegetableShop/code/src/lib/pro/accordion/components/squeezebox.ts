import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { SBItemComponent } from './sb-item';
import { MdbAccordionService } from '../mdb-accordion.service';
import { Subscription } from 'rxjs';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  exportAs: 'squeezebox',
  selector: 'mdb-squeezebox, mdb-accordion',
  templateUrl: 'squeezebox.html',
  styleUrls: ['./../accordion-module.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MdbAccordionService],
})
export class SqueezeBoxComponent implements OnInit, AfterContentInit, OnDestroy {
  private itemsChanges: Subscription;

  @Input()
  get multiple(): boolean {
    return this._multiple;
  }
  set multiple(value: BooleanInput) {
    const coercedValue = coerceBooleanProperty(value);

    this._multiple = coercedValue;
    this.accordionService.updateMultipleState(coercedValue);
  }
  private _multiple = true;

  @Input()
  get autoExpand(): boolean {
    return this._autoExpand;
  }
  set autoExpand(value: BooleanInput) {
    this._autoExpand = coerceBooleanProperty(value);
  }
  private _autoExpand = true;

  @ContentChildren(SBItemComponent) items: QueryList<SBItemComponent>;

  constructor(private accordionService: MdbAccordionService) {}

  ngOnInit() {
    this.accordionService.updateMultipleState(this.multiple);
  }

  ngAfterContentInit(): void {
    if (!this.multiple) {
      this.items.forEach((el: any) => {
        const collapsed = el.collapsed ? true : false;
        el.applyToggle(collapsed);
        el.autoExpand = this.autoExpand;
      });
    }

    this.itemsChanges = this.items.changes.subscribe((accordionItems: any) => {
      this.items = accordionItems;
      const accordionItemsArray = accordionItems.toArray();
      this.accordionService.updateItemsArray(accordionItemsArray);
    });

    this.items.forEach((item: any) => this.accordionService.addItem(item));
  }

  ngOnDestroy() {
    if (this.itemsChanges) {
      this.itemsChanges.unsubscribe();
    }
  }
}
