import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmProgressbarModule } from 'ng-kit';

import { ProgressbarHeightComponent } from './progressbar-height';

@NgModule({
  imports: [BrowserModule, XmProgressbarModule],
  declarations: [ProgressbarHeightComponent],
  exports: [ProgressbarHeightComponent],
  bootstrap: [ProgressbarHeightComponent]
})
export class ProgressbarHeightModule { }
