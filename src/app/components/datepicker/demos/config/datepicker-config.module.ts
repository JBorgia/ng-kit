import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { XmDatepickerModule } from 'ng-kit';

import { DatepickerConfigComponent } from './datepicker-config';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    XmDatepickerModule
  ],
  declarations: [DatepickerConfigComponent],
  exports: [DatepickerConfigComponent],
  bootstrap: [DatepickerConfigComponent]
})
export class DatepickerConfigModule { }
