import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgkDatepickerModule } from 'ng-kit';

import { DatepickerMultipleComponent } from './datepicker-multiple';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgkDatepickerModule
  ],
  declarations: [DatepickerMultipleComponent],
  exports: [DatepickerMultipleComponent],
  bootstrap: [DatepickerMultipleComponent]
})
export class DatepickerMultipleModule { }
