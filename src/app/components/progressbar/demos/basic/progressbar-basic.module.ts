import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkProgressbarModule } from 'ng-kit';

import { ProgressbarBasicComponent } from './progressbar-basic';

@NgModule({
  imports: [BrowserModule, NgkProgressbarModule],
  declarations: [ProgressbarBasicComponent],
  exports: [ProgressbarBasicComponent],
  bootstrap: [ProgressbarBasicComponent]
})
export class ProgressbarBasicModule { }
