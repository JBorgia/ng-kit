import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkTabsetModule } from 'ng-kit';

import { TabsetPillsComponent } from './tabset-pills';

@NgModule({
  imports: [BrowserModule, NgkTabsetModule],
  declarations: [TabsetPillsComponent],
  exports: [TabsetPillsComponent],
  bootstrap: [TabsetPillsComponent]
})
export class TabsetPillsModule { }
