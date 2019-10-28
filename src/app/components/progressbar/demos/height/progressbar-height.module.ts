import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkProgressbarModule } from 'ng-kit';

import { ProgressbarHeightComponent } from './progressbar-height';

@NgModule({
  imports: [BrowserModule, NgkProgressbarModule],
  declarations: [ProgressbarHeightComponent],
  exports: [ProgressbarHeightComponent],
  bootstrap: [ProgressbarHeightComponent]
})
export class ProgressbarHeightModule { }
