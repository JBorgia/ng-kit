import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitDatepickerModule } from 'ng-kit';

import { DatepickerDisabledComponent } from './datepicker-disabled';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgKitDatepickerModule,
    NgKitButtonModule
  ],
  declarations: [DatepickerDisabledComponent],
  exports: [DatepickerDisabledComponent],
  bootstrap: [DatepickerDisabledComponent]
})
export class DatepickerDisabledModule { }
