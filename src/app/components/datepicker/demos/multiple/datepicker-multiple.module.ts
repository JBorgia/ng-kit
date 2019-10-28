import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitDatepickerModule } from 'ng-kit';

import { DatepickerMultipleComponent } from './datepicker-multiple';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgKitDatepickerModule
  ],
  declarations: [DatepickerMultipleComponent],
  exports: [DatepickerMultipleComponent],
  bootstrap: [DatepickerMultipleComponent]
})
export class DatepickerMultipleModule { }
