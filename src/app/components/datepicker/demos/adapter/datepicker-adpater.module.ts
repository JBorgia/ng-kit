import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmDatepickerModule } from 'ng-kit';

import { DatepickerAdapterComponent } from './datepicker-adapter';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    XmDatepickerModule,
    XmButtonModule,
  ],
  declarations: [DatepickerAdapterComponent],
  exports: [DatepickerAdapterComponent],
  bootstrap: [DatepickerAdapterComponent]
})
export class DatepickerAdapterModule { }
