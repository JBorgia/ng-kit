import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { XmDatepickerModule } from 'ng-kit';

import { DatepickerMultipleComponent } from './datepicker-multiple';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    XmDatepickerModule
  ],
  declarations: [DatepickerMultipleComponent],
  exports: [DatepickerMultipleComponent],
  bootstrap: [DatepickerMultipleComponent]
})
export class DatepickerMultipleModule { }
