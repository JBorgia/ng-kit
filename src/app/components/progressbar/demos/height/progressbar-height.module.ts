import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitProgressbarModule } from 'ng-kit';

import { ProgressbarHeightComponent } from './progressbar-height';

@NgModule({
  imports: [BrowserModule, NgKitProgressbarModule],
  declarations: [ProgressbarHeightComponent],
  exports: [ProgressbarHeightComponent],
  bootstrap: [ProgressbarHeightComponent]
})
export class ProgressbarHeightModule { }
