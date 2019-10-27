import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmProgressbarModule } from 'ng-kit';

import { ProgressbarShowvalueComponent } from './progressbar-showvalue';

@NgModule({
  imports: [BrowserModule, XmProgressbarModule],
  declarations: [ProgressbarShowvalueComponent],
  exports: [ProgressbarShowvalueComponent],
  bootstrap: [ProgressbarShowvalueComponent]
})
export class ProgressbarShowValueModule { }
