import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmProgressbarModule } from 'ng-kit';

import { ProgressbarConfigComponent } from './progressbar-config';

@NgModule({
  imports: [BrowserModule, XmProgressbarModule],
  declarations: [ProgressbarConfigComponent],
  exports: [ProgressbarConfigComponent],
  bootstrap: [ProgressbarConfigComponent]
})
export class ProgressbarConfigModule { }
