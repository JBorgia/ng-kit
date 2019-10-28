import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitProgressbarModule } from 'ng-kit';

import { ProgressbarLabelsComponent } from './progressbar-labels';

@NgModule({
  imports: [BrowserModule, NgKitProgressbarModule],
  declarations: [ProgressbarLabelsComponent],
  exports: [ProgressbarLabelsComponent],
  bootstrap: [ProgressbarLabelsComponent]
})
export class ProgressbarLabelsModule { }
