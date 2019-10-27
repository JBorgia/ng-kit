import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { XmDatepickerModule } from 'ng-kit';

import { DatepickerPopupComponent } from './datepicker-popup';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    XmDatepickerModule
  ],
  declarations: [DatepickerPopupComponent],
  exports: [DatepickerPopupComponent],
  bootstrap: [DatepickerPopupComponent]
})
export class DatepickerPopupModule { }
