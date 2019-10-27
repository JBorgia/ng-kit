import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmTabsetModule } from 'ng-kit';

import { TabsetPillsComponent } from './tabset-pills';

@NgModule({
  imports: [BrowserModule, XmTabsetModule],
  declarations: [TabsetPillsComponent],
  exports: [TabsetPillsComponent],
  bootstrap: [TabsetPillsComponent]
})
export class TabsetPillsModule { }
