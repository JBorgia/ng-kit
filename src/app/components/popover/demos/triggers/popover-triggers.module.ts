import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitPopoverModule } from 'ng-kit';

import { PopoverTriggersComponent } from './popover-triggers';

@NgModule({
  imports: [
    BrowserModule,
    NgKitPopoverModule,
    NgKitButtonModule,
  ],
  declarations: [PopoverTriggersComponent],
  exports: [PopoverTriggersComponent],
  bootstrap: [PopoverTriggersComponent]
})
export class PopoverTriggersModule { }
