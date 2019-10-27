import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmProgressbarModule } from 'ng-kit';

import { ProgressbarBasicComponent } from './progressbar-basic';

@NgModule({
  imports: [BrowserModule, XmProgressbarModule],
  declarations: [ProgressbarBasicComponent],
  exports: [ProgressbarBasicComponent],
  bootstrap: [ProgressbarBasicComponent]
})
export class ProgressbarBasicModule { }
