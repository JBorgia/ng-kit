import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkPopoverModule } from 'ng-kit';

import { PopoverTplcontentComponent } from './popover-tpl-content';

@NgModule({
  imports: [
    BrowserModule,
    NgkPopoverModule,
    NgkButtonModule,
  ],
  declarations: [PopoverTplcontentComponent],
  exports: [PopoverTplcontentComponent],
  bootstrap: [PopoverTplcontentComponent]
})
export class PopoverTplContentModule { }
