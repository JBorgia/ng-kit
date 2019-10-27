import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmProgressbarModule } from 'ng-kit';

import { ProgressbarLabelsComponent } from './progressbar-labels';

@NgModule({
  imports: [BrowserModule, XmProgressbarModule],
  declarations: [ProgressbarLabelsComponent],
  exports: [ProgressbarLabelsComponent],
  bootstrap: [ProgressbarLabelsComponent]
})
export class ProgressbarLabelsModule { }
