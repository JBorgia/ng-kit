import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgkDatepickerComponent } from './datepicker';
import { NgkDatepickerDayViewComponent } from './datepicker-day-view';
import { NgkInputDatepickerDirective } from './datepicker-input';
import { NgkDatepickerMonthViewComponent } from './datepicker-month-view';
import { NgkDatepickerNavigationComponent } from './datepicker-navigation';
import { NgkDatepickerNavigationSelectComponent } from './datepicker-navigation-select';

export { NgkDatepickerComponent, NgkDatepickerNavigateEvent } from './datepicker';
export { NgkInputDatepickerDirective } from './datepicker-input';
export { NgkCalendar, NgkPeriod, NgkCalendarGregorian } from './calendar';
export { NgkDatepickerMonthViewComponent } from './datepicker-month-view';
export { NgkDatepickerDayViewComponent } from './datepicker-day-view';
export { NgkDatepickerNavigationComponent } from './datepicker-navigation';
export { NgkDatepickerNavigationSelectComponent } from './datepicker-navigation-select';
export { NgkDatepickerConfig } from './datepicker-config';
export { NgkDatepickerI18n } from './datepicker-i18n';
export { NgkDateStruct } from './date-struct';
export { NgkDate } from './date';
export { NgkDateAdapter } from './adapters/date-adapter';
export { NgkDateNativeAdapter } from './adapters/date-native-adapter';
export { NgkDateNativeUTCAdapter } from './adapters/date-native-utc-adapter';
export { NgkDateParserFormatter } from './date-parser-formatter';

@NgModule({
  declarations: [
    NgkDatepickerComponent,
    NgkDatepickerMonthViewComponent,
    NgkDatepickerNavigationComponent,
    NgkDatepickerNavigationSelectComponent,
    NgkDatepickerDayViewComponent,
    NgkInputDatepickerDirective
  ],
  exports: [NgkDatepickerComponent, NgkInputDatepickerDirective],
  imports: [CommonModule, FormsModule],
  entryComponents: [NgkDatepickerComponent]
})
export class NgkDatepickerModule { }
