import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitPopoverModule } from 'ng-kit';

import { PopoverContainerComponent } from './popover-container';

@NgModule({
  imports: [
    BrowserModule,
    NgKitPopoverModule,
    NgKitButtonModule
  ],
  declarations: [PopoverContainerComponent],
  exports: [PopoverContainerComponent],
  bootstrap: [PopoverContainerComponent]
})
export class PopoverContainerModule { }
