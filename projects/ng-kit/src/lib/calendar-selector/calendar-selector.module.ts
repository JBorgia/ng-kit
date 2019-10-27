import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { XmDatepickerModule } from '../datepicker/datepicker.module';
import { CalendarSelectorComponent } from './calendar-selector';

@NgModule({
  declarations: [CalendarSelectorComponent],
  exports: [CalendarSelectorComponent],
  imports: [
    CommonModule,
    XmDatepickerModule
  ]
})
export class XmCalendarSelectorModule { }
