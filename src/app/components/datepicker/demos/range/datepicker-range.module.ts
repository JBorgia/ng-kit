import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitDatepickerModule } from 'ng-kit';

import { DatepickerRangeComponent } from './datepicker-range';

@NgModule({
  imports: [
    BrowserModule,
    NgKitDatepickerModule
  ],
  declarations: [DatepickerRangeComponent],
  exports: [DatepickerRangeComponent],
  bootstrap: [DatepickerRangeComponent]
})
export class DatepickerRangeModule { }
