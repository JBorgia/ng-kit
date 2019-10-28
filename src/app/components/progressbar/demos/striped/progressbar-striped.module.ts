import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitProgressbarModule } from 'ng-kit';

import { ProgressbarStripedComponent } from './progressbar-striped';

@NgModule({
  imports: [BrowserModule, NgKitProgressbarModule],
  declarations: [ProgressbarStripedComponent],
  exports: [ProgressbarStripedComponent],
  bootstrap: [ProgressbarStripedComponent]
})
export class ProgressbarStripedModule { }
