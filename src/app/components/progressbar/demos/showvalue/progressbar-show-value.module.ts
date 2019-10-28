import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkProgressbarModule } from 'ng-kit';

import { ProgressbarShowvalueComponent } from './progressbar-showvalue';

@NgModule({
  imports: [BrowserModule, NgkProgressbarModule],
  declarations: [ProgressbarShowvalueComponent],
  exports: [ProgressbarShowvalueComponent],
  bootstrap: [ProgressbarShowvalueComponent]
})
export class ProgressbarShowValueModule { }
