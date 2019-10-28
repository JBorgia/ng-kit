import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkPopoverModule } from 'ng-kit';

import { PopoverTriggersComponent } from './popover-triggers';

@NgModule({
  imports: [
    BrowserModule,
    NgkPopoverModule,
    NgkButtonModule,
  ],
  declarations: [PopoverTriggersComponent],
  exports: [PopoverTriggersComponent],
  bootstrap: [PopoverTriggersComponent]
})
export class PopoverTriggersModule { }
