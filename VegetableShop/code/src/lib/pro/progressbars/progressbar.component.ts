import {
  BooleanInput,
  coerceBooleanProperty,
  coerceNumberProperty,
  NumberInput,
} from '@angular/cdk/coercion';
import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ProgressbarConfigComponent } from './progressbar.config.component';

@Component({
  selector: 'mdb-progressbar, mdb-progress',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbars-module.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressbarComponent {
  /** if `true` changing value of progress bar will be animated (note: not supported by Bootstrap 4) */
  @Input()
  get animate(): boolean {
    return this._animate;
  }
  set animate(value: BooleanInput) {
    this._animate = coerceBooleanProperty(value);
  }
  private _animate = false;
  /** maximum total value of progress element */
  @Input()
  get max(): number {
    return this._max;
  }
  set max(value: NumberInput) {
    this._max = coerceNumberProperty(value);
  }
  private _max: number;
  /** provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger` */
  @Input() public type: string;
  /** current value of progress bar */
  @Input()
  get value(): number {
    return this._value;
  }
  set value(value: NumberInput) {
    this._value = coerceNumberProperty(value);
  }
  private _value: number;

  public constructor(config: ProgressbarConfigComponent) {
    Object.assign(this, config);
  }
}
