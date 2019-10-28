import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitDatepickerModule } from 'ng-kit';

import { DatepickerPopupComponent } from './datepicker-popup';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgKitDatepickerModule
  ],
  declarations: [DatepickerPopupComponent],
  exports: [DatepickerPopupComponent],
  bootstrap: [DatepickerPopupComponent]
})
export class DatepickerPopupModule { }
