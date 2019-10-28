import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

import { NgKitDate } from './date';
import { NgKitDatepickerI18n } from './datepicker-i18n';

@Component({
  selector: 'ng-kit-datepicker-day-view, [xmDatepickerDayView]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./datepicker-day-view.scss'],
  template: `{{ i18n.getDayNumerals(date) }}`
})
export class NgKitDatepickerDayViewComponent {
  @Input() currentMonth: number;
  @Input() date: NgKitDate;
  @Input() disabled: boolean;
  @Input() selected: boolean;

  @HostBinding('class.outside') get outside() { return this.isMuted(); }
  @HostBinding('class.text-muted') get textMuted() { return this.isMuted(); }

  @HostBinding('class.active') @Input() focused: boolean;
  @HostBinding('class.active-date') get bgPrimary() { return this.selected; }

  constructor(public i18n: NgKitDatepickerI18n) { }

  isMuted() { return !this.selected && (this.date.month !== this.currentMonth || this.disabled); }
}
