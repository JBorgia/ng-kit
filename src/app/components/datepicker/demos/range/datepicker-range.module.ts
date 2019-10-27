import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmDatepickerModule } from 'ng-kit';

import { DatepickerRangeComponent } from './datepicker-range';

@NgModule({
  imports: [
    BrowserModule,
    XmDatepickerModule
  ],
  declarations: [DatepickerRangeComponent],
  exports: [DatepickerRangeComponent],
  bootstrap: [DatepickerRangeComponent]
})
export class DatepickerRangeModule { }
