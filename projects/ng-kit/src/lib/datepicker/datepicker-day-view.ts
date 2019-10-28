import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

import { NgkDate } from './date';
import { NgkDatepickerI18n } from './datepicker-i18n';

@Component({
  selector: 'ngk-datepicker-day-view, [ngkDatepickerDayView]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./datepicker-day-view.scss'],
  template: `{{ i18n.getDayNumerals(date) }}`
})
export class NgkDatepickerDayViewComponent {
  @Input() currentMonth: number;
  @Input() date: NgkDate;
  @Input() disabled: boolean;
  @Input() selected: boolean;

  @HostBinding('class.outside') get outside() { return this.isMuted(); }
  @HostBinding('class.text-muted') get textMuted() { return this.isMuted(); }

  @HostBinding('class.active') @Input() focused: boolean;
  @HostBinding('class.active-date') get bgPrimary() { return this.selected; }

  constructor(public i18n: NgkDatepickerI18n) { }

  isMuted() { return !this.selected && (this.date.month !== this.currentMonth || this.disabled); }
}
