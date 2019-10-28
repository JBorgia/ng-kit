import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitProgressbarModule } from 'ng-kit';

import { ProgressbarBasicComponent } from './progressbar-basic';

@NgModule({
  imports: [BrowserModule, NgKitProgressbarModule],
  declarations: [ProgressbarBasicComponent],
  exports: [ProgressbarBasicComponent],
  bootstrap: [ProgressbarBasicComponent]
})
export class ProgressbarBasicModule { }
