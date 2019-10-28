import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkTabsetModule } from 'ng-kit';

import { TabsetSelectbyidComponent } from './tabset-selectbyid';

@NgModule({
  imports: [BrowserModule, NgkTabsetModule, NgkButtonModule],
  declarations: [TabsetSelectbyidComponent],
  exports: [TabsetSelectbyidComponent],
  bootstrap: [TabsetSelectbyidComponent]
})
export class TabsetSelectbyidModule { }
