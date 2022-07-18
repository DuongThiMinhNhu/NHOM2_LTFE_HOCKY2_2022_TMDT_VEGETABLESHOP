import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  HostListener,
} from '@angular/core';
import { MdbTimePickerComponent } from './timepicker.component';

@Component({
  templateUrl: './timepicker-toggle.component.html',
  selector: 'mdb-timepicker-toggle',
  styleUrls: ['./timepicker-toggle.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdbTimepickerToggleComponent {
  @Input() mdbTimePickerToggle: MdbTimePickerComponent;

  @HostListener('click')
  handleClick() {
    this.mdbTimePickerToggle.open();
  }

  constructor() {}
}
