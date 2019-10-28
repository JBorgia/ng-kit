import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkPopoverModule } from 'ng-kit';

import { PopoverContainerComponent } from './popover-container';

@NgModule({
  imports: [
    BrowserModule,
    NgkPopoverModule,
    NgkButtonModule
  ],
  declarations: [PopoverContainerComponent],
  exports: [PopoverContainerComponent],
  bootstrap: [PopoverContainerComponent]
})
export class PopoverContainerModule { }
