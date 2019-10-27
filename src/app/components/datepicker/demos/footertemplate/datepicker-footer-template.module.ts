import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmDatepickerModule } from 'ng-kit';

import { DatepickerFootertemplateComponent } from './datepicker-footertemplate';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    XmDatepickerModule,
    XmButtonModule
  ],
  declarations: [DatepickerFootertemplateComponent],
  exports: [DatepickerFootertemplateComponent],
  bootstrap: [DatepickerFootertemplateComponent]
})
export class DatepickerFooterTemplateModule { }
