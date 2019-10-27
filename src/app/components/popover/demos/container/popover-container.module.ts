import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmPopoverModule } from 'ng-kit';

import { PopoverContainerComponent } from './popover-container';

@NgModule({
  imports: [
    BrowserModule,
    XmPopoverModule,
    XmButtonModule
  ],
  declarations: [PopoverContainerComponent],
  exports: [PopoverContainerComponent],
  bootstrap: [PopoverContainerComponent]
})
export class PopoverContainerModule { }
