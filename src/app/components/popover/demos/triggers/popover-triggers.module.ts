import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmPopoverModule } from 'ng-kit';

import { PopoverTriggersComponent } from './popover-triggers';

@NgModule({
  imports: [
    BrowserModule,
    XmPopoverModule,
    XmButtonModule,
  ],
  declarations: [PopoverTriggersComponent],
  exports: [PopoverTriggersComponent],
  bootstrap: [PopoverTriggersComponent]
})
export class PopoverTriggersModule { }
