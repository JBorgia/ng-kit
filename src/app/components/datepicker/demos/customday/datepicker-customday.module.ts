import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitDatepickerModule } from 'ng-kit';

import { DatepickerCustomdayComponent } from './datepicker-customday';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgKitDatepickerModule
  ],
  declarations: [DatepickerCustomdayComponent],
  exports: [DatepickerCustomdayComponent],
  bootstrap: [DatepickerCustomdayComponent]
})
export class DatepickerCustomdayModule { }
