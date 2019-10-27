import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmPopoverModule } from 'ng-kit';

import { PopoverAutocloseComponent } from './popover-auto-close';

@NgModule({
  imports: [
    BrowserModule,
    XmPopoverModule,
    XmButtonModule,
  ],
  declarations: [PopoverAutocloseComponent],
  exports: [PopoverAutocloseComponent],
  bootstrap: [PopoverAutocloseComponent]
})
export class PopoverAutocloseModule { }
