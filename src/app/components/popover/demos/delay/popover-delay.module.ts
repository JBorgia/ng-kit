import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmPopoverModule } from 'ng-kit';

import { PopoverDelayComponent } from './popover-delay';

@NgModule({
  imports: [
    BrowserModule,
    XmPopoverModule,
    XmButtonModule,
  ],
  declarations: [PopoverDelayComponent],
  exports: [PopoverDelayComponent],
  bootstrap: [PopoverDelayComponent]
})
export class PopoverDelayModule { }
