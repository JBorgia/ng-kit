import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgkDatepickerModule } from 'ng-kit';

import { DatepickerI18nComponent } from './datepicker-i18n';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgkDatepickerModule
  ],
  declarations: [DatepickerI18nComponent],
  exports: [DatepickerI18nComponent],
  bootstrap: [DatepickerI18nComponent]
})
export class DatepickerI18nModule { }
