import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkProgressbarModule } from 'ng-kit';

import { ProgressbarStripedComponent } from './progressbar-striped';

@NgModule({
  imports: [BrowserModule, NgkProgressbarModule],
  declarations: [ProgressbarStripedComponent],
  exports: [ProgressbarStripedComponent],
  bootstrap: [ProgressbarStripedComponent]
})
export class ProgressbarStripedModule { }
