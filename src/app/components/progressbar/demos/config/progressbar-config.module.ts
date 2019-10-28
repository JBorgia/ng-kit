import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkProgressbarModule } from 'ng-kit';

import { ProgressbarConfigComponent } from './progressbar-config';

@NgModule({
  imports: [BrowserModule, NgkProgressbarModule],
  declarations: [ProgressbarConfigComponent],
  exports: [ProgressbarConfigComponent],
  bootstrap: [ProgressbarConfigComponent]
})
export class ProgressbarConfigModule { }
