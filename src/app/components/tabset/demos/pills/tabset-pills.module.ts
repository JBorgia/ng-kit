import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitTabsetModule } from 'ng-kit';

import { TabsetPillsComponent } from './tabset-pills';

@NgModule({
  imports: [BrowserModule, NgKitTabsetModule],
  declarations: [TabsetPillsComponent],
  exports: [TabsetPillsComponent],
  bootstrap: [TabsetPillsComponent]
})
export class TabsetPillsModule { }
