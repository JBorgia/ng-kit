import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmDatepickerModule } from 'ng-kit';

import { DatepickerBasicComponent } from './datepicker-basic';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    XmDatepickerModule,
    XmButtonModule
  ],
  declarations: [DatepickerBasicComponent],
  exports: [DatepickerBasicComponent],
  bootstrap: [DatepickerBasicComponent]
})
export class DatepickerBasicModule { }
