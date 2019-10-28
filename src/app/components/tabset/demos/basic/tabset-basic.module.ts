import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitTabsetModule } from 'ng-kit';

import { TabsetBasicComponent } from './tabset-basic';

@NgModule({
  imports: [BrowserModule, NgKitTabsetModule],
  declarations: [TabsetBasicComponent],
  exports: [TabsetBasicComponent],
  bootstrap: [TabsetBasicComponent]
})
export class TabsetBasicModule { }
