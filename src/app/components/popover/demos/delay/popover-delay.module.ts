import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitPopoverModule } from 'ng-kit';

import { PopoverDelayComponent } from './popover-delay';

@NgModule({
  imports: [
    BrowserModule,
    NgKitPopoverModule,
    NgKitButtonModule,
  ],
  declarations: [PopoverDelayComponent],
  exports: [PopoverDelayComponent],
  bootstrap: [PopoverDelayComponent]
})
export class PopoverDelayModule { }
