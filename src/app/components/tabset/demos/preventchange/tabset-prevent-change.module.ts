import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkTabsetModule } from 'ng-kit';

import { TabsetPreventchangeComponent } from './tabset-prevent-change';


@NgModule({
  imports: [BrowserModule, NgkTabsetModule],
  declarations: [TabsetPreventchangeComponent],
  exports: [TabsetPreventchangeComponent],
  bootstrap: [TabsetPreventchangeComponent]
})
export class TabsetPreventChangeModule { }
