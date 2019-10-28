import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgkDatepickerModule } from 'ng-kit';

import { DatepickerPositiontargetComponent } from './datepicker-positiontarget';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgkDatepickerModule
  ],
  declarations: [DatepickerPositiontargetComponent],
  exports: [DatepickerPositiontargetComponent],
  bootstrap: [DatepickerPositiontargetComponent]
})
export class DatepickerPositiontargetModule { }
