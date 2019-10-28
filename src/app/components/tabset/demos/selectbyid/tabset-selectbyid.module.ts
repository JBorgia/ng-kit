import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitTabsetModule } from 'ng-kit';

import { TabsetSelectbyidComponent } from './tabset-selectbyid';

@NgModule({
  imports: [BrowserModule, NgKitTabsetModule, NgKitButtonModule],
  declarations: [TabsetSelectbyidComponent],
  exports: [TabsetSelectbyidComponent],
  bootstrap: [TabsetSelectbyidComponent]
})
export class TabsetSelectbyidModule { }
