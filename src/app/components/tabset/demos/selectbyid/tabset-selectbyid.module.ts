import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmTabsetModule } from 'ng-kit';

import { TabsetSelectbyidComponent } from './tabset-selectbyid';

@NgModule({
  imports: [BrowserModule, XmTabsetModule, XmButtonModule],
  declarations: [TabsetSelectbyidComponent],
  exports: [TabsetSelectbyidComponent],
  bootstrap: [TabsetSelectbyidComponent]
})
export class TabsetSelectbyidModule { }
