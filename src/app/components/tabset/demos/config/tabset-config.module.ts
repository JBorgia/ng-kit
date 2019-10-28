import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkTabsetModule } from 'ng-kit';

import { TabsetConfigComponent } from './tabset-config';

@NgModule({
  imports: [BrowserModule, NgkTabsetModule],
  declarations: [TabsetConfigComponent],
  exports: [TabsetConfigComponent],
  bootstrap: [TabsetConfigComponent]
})
export class TabsetConfigModule { }
