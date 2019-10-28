import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitDatepickerModule } from 'ng-kit';

import { DatepickerAdapterComponent } from './datepicker-adapter';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgKitDatepickerModule,
    NgKitButtonModule,
  ],
  declarations: [DatepickerAdapterComponent],
  exports: [DatepickerAdapterComponent],
  bootstrap: [DatepickerAdapterComponent]
})
export class DatepickerAdapterModule { }
