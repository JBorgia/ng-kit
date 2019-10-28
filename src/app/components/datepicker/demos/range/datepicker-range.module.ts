import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkDatepickerModule } from 'ng-kit';

import { DatepickerRangeComponent } from './datepicker-range';

@NgModule({
  imports: [
    BrowserModule,
    NgkDatepickerModule
  ],
  declarations: [DatepickerRangeComponent],
  exports: [DatepickerRangeComponent],
  bootstrap: [DatepickerRangeComponent]
})
export class DatepickerRangeModule { }
