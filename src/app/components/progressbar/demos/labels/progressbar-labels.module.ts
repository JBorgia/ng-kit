import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkProgressbarModule } from 'ng-kit';

import { ProgressbarLabelsComponent } from './progressbar-labels';

@NgModule({
  imports: [BrowserModule, NgkProgressbarModule],
  declarations: [ProgressbarLabelsComponent],
  exports: [ProgressbarLabelsComponent],
  bootstrap: [ProgressbarLabelsComponent]
})
export class ProgressbarLabelsModule { }
