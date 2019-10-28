import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkPopoverModule } from 'ng-kit';

import { PopoverVisibilityComponent } from './popover-visibility';

@NgModule({
  imports: [
    BrowserModule,
    NgkPopoverModule,
    NgkButtonModule,
  ],
  declarations: [PopoverVisibilityComponent],
  exports: [PopoverVisibilityComponent],
  bootstrap: [PopoverVisibilityComponent]
})
export class PopoverVisibilityModule { }
