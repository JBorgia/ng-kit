import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkPopoverModule } from 'ng-kit';

import { PopoverDelayComponent } from './popover-delay';

@NgModule({
  imports: [
    BrowserModule,
    NgkPopoverModule,
    NgkButtonModule,
  ],
  declarations: [PopoverDelayComponent],
  exports: [PopoverDelayComponent],
  bootstrap: [PopoverDelayComponent]
})
export class PopoverDelayModule { }
