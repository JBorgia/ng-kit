import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmTabsetModule } from 'ng-kit';

import { TabsetPreventchangeComponent } from './tabset-prevent-change';


@NgModule({
  imports: [BrowserModule, XmTabsetModule],
  declarations: [TabsetPreventchangeComponent],
  exports: [TabsetPreventchangeComponent],
  bootstrap: [TabsetPreventchangeComponent]
})
export class TabsetPreventChangeModule { }
