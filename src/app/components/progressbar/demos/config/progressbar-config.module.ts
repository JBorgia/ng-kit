import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitProgressbarModule } from 'ng-kit';

import { ProgressbarConfigComponent } from './progressbar-config';

@NgModule({
  imports: [BrowserModule, NgKitProgressbarModule],
  declarations: [ProgressbarConfigComponent],
  exports: [ProgressbarConfigComponent],
  bootstrap: [ProgressbarConfigComponent]
})
export class ProgressbarConfigModule { }
