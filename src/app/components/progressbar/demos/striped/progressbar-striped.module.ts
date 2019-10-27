import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmProgressbarModule } from 'ng-kit';

import { ProgressbarStripedComponent } from './progressbar-striped';

@NgModule({
  imports: [BrowserModule, XmProgressbarModule],
  declarations: [ProgressbarStripedComponent],
  exports: [ProgressbarStripedComponent],
  bootstrap: [ProgressbarStripedComponent]
})
export class ProgressbarStripedModule { }
