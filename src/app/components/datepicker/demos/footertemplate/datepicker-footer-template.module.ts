import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitDatepickerModule } from 'ng-kit';

import { DatepickerFootertemplateComponent } from './datepicker-footertemplate';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgKitDatepickerModule,
    NgKitButtonModule
  ],
  declarations: [DatepickerFootertemplateComponent],
  exports: [DatepickerFootertemplateComponent],
  bootstrap: [DatepickerFootertemplateComponent]
})
export class DatepickerFooterTemplateModule { }
