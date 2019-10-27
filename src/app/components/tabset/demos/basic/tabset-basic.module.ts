import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmTabsetModule } from 'ng-kit';

import { TabsetBasicComponent } from './tabset-basic';

@NgModule({
  imports: [BrowserModule, XmTabsetModule],
  declarations: [TabsetBasicComponent],
  exports: [TabsetBasicComponent],
  bootstrap: [TabsetBasicComponent]
})
export class TabsetBasicModule { }
