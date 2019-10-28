import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitTabsetModule } from 'ng-kit';

import { TabsetConfigComponent } from './tabset-config';

@NgModule({
  imports: [BrowserModule, NgKitTabsetModule],
  declarations: [TabsetConfigComponent],
  exports: [TabsetConfigComponent],
  bootstrap: [TabsetConfigComponent]
})
export class TabsetConfigModule { }
