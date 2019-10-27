import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { XmDatepickerModule } from 'ng-kit';

import { DatepickerCustomdayComponent } from './datepicker-customday';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    XmDatepickerModule
  ],
  declarations: [DatepickerCustomdayComponent],
  exports: [DatepickerCustomdayComponent],
  bootstrap: [DatepickerCustomdayComponent]
})
export class DatepickerCustomdayModule { }
