import {
  BooleanInput,
  coerceBooleanProperty,
  coerceNumberProperty,
  NumberInput,
} from '@angular/cdk/coercion';
import { Directive, HostBinding, Input } from '@angular/core';

import { BarComponent } from './bar.component';

@Directive({ selector: 'mdbProgress, [mdbProgress]' })
export class ProgressDirective {
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
  @HostBinding('attr.max')
  @Input()
  public get max(): number {
    return this._max;
  }

  public set max(value: NumberInput) {
    const v = coerceNumberProperty(value);
    this._max = v;
    this.bars.forEach((bar: BarComponent) => {
      bar.recalculatePercentage();
    });
  }

  @HostBinding('class.progress') public addClass = true;

  public bars: any[] = [];

  protected _max = 100;

  public addBar(bar: BarComponent): void {
    if (!this.animate) {
      bar.transition = 'none';
    }
    this.bars.push(bar);
  }

  public removeBar(bar: BarComponent): void {
    this.bars.splice(this.bars.indexOf(bar), 1);
  }
}
