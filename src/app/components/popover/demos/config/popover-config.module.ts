import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmPopoverModule } from 'ng-kit';

import { PopoverConfigComponent } from './popover-config';

@NgModule({
  imports: [
    BrowserModule,
    XmPopoverModule,
    XmButtonModule,
  ],
  declarations: [PopoverConfigComponent],
  exports: [PopoverConfigComponent],
  bootstrap: [PopoverConfigComponent]
})
export class PopoverConfigModule { }
