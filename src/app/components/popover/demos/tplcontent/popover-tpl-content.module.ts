import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmPopoverModule } from 'ng-kit';

import { PopoverTplcontentComponent } from './popover-tpl-content';

@NgModule({
  imports: [
    BrowserModule,
    XmPopoverModule,
    XmButtonModule,
  ],
  declarations: [PopoverTplcontentComponent],
  exports: [PopoverTplcontentComponent],
  bootstrap: [PopoverTplcontentComponent]
})
export class PopoverTplContentModule { }
