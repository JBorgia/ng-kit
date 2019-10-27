import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmTabsetModule } from 'ng-kit';

import { TabsetConfigComponent } from './tabset-config';

@NgModule({
  imports: [BrowserModule, XmTabsetModule],
  declarations: [TabsetConfigComponent],
  exports: [TabsetConfigComponent],
  bootstrap: [TabsetConfigComponent]
})
export class TabsetConfigModule { }
