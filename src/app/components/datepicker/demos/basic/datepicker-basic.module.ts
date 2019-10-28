import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitDatepickerModule } from 'ng-kit';

import { DatepickerBasicComponent } from './datepicker-basic';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgKitDatepickerModule,
    NgKitButtonModule
  ],
  declarations: [DatepickerBasicComponent],
  exports: [DatepickerBasicComponent],
  bootstrap: [DatepickerBasicComponent]
})
export class DatepickerBasicModule { }
