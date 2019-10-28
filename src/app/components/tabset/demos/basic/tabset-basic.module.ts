import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkTabsetModule } from 'ng-kit';

import { TabsetBasicComponent } from './tabset-basic';

@NgModule({
  imports: [BrowserModule, NgkTabsetModule],
  declarations: [TabsetBasicComponent],
  exports: [TabsetBasicComponent],
  bootstrap: [TabsetBasicComponent]
})
export class TabsetBasicModule { }
