import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitProgressbarModule } from 'ng-kit';

import { ProgressbarShowvalueComponent } from './progressbar-showvalue';

@NgModule({
  imports: [BrowserModule, NgKitProgressbarModule],
  declarations: [ProgressbarShowvalueComponent],
  exports: [ProgressbarShowvalueComponent],
  bootstrap: [ProgressbarShowvalueComponent]
})
export class ProgressbarShowValueModule { }
