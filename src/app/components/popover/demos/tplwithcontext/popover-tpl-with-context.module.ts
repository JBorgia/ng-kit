import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmPopoverModule } from 'ng-kit';

import { PopoverTplwithcontextComponent } from './popover-tpl-with-context';

@NgModule({
  imports: [
    BrowserModule,
    XmPopoverModule,
    XmButtonModule,
  ],
  declarations: [PopoverTplwithcontextComponent],
  exports: [PopoverTplwithcontextComponent],
  bootstrap: [PopoverTplwithcontextComponent]
})
export class PopoverTplWithContextModule { }
