import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitTabsetModule } from 'ng-kit';

import { TabsetPreventchangeComponent } from './tabset-prevent-change';


@NgModule({
  imports: [BrowserModule, NgKitTabsetModule],
  declarations: [TabsetPreventchangeComponent],
  exports: [TabsetPreventchangeComponent],
  bootstrap: [TabsetPreventchangeComponent]
})
export class TabsetPreventChangeModule { }
