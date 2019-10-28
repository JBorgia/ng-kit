import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgKitDatepickerComponent } from './datepicker';
import { NgKitDatepickerDayViewComponent } from './datepicker-day-view';
import { NgKitInputDatepickerDirective } from './datepicker-input';
import { NgKitDatepickerMonthViewComponent } from './datepicker-month-view';
import { NgKitDatepickerNavigationComponent } from './datepicker-navigation';
import { NgKitDatepickerNavigationSelectComponent } from './datepicker-navigation-select';

export { NgKitDatepickerComponent, NgKitDatepickerNavigateEvent } from './datepicker';
export { NgKitInputDatepickerDirective } from './datepicker-input';
export { NgKitCalendar, NgKitPeriod, NgKitCalendarGregorian } from './calendar';
export { NgKitDatepickerMonthViewComponent } from './datepicker-month-view';
export { NgKitDatepickerDayViewComponent } from './datepicker-day-view';
export { NgKitDatepickerNavigationComponent } from './datepicker-navigation';
export { NgKitDatepickerNavigationSelectComponent } from './datepicker-navigation-select';
export { NgKitDatepickerConfig } from './datepicker-config';
export { NgKitDatepickerI18n } from './datepicker-i18n';
export { NgKitDateStruct } from './date-struct';
export { NgKitDate } from './date';
export { NgKitDateAdapter } from './adapters/date-adapter';
export { NgKitDateNativeAdapter } from './adapters/date-native-adapter';
export { NgKitDateNativeUTCAdapter } from './adapters/date-native-utc-adapter';
export { NgKitDateParserFormatter } from './date-parser-formatter';

@NgModule({
  declarations: [
    NgKitDatepickerComponent,
    NgKitDatepickerMonthViewComponent,
    NgKitDatepickerNavigationComponent,
    NgKitDatepickerNavigationSelectComponent,
    NgKitDatepickerDayViewComponent,
    NgKitInputDatepickerDirective
  ],
  exports: [NgKitDatepickerComponent, NgKitInputDatepickerDirective],
  imports: [CommonModule, FormsModule],
  entryComponents: [NgKitDatepickerComponent]
})
export class NgKitDatepickerModule { }
