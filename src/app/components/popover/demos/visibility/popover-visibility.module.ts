import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitPopoverModule } from 'ng-kit';

import { PopoverVisibilityComponent } from './popover-visibility';

@NgModule({
  imports: [
    BrowserModule,
    NgKitPopoverModule,
    NgKitButtonModule,
  ],
  declarations: [PopoverVisibilityComponent],
  exports: [PopoverVisibilityComponent],
  bootstrap: [PopoverVisibilityComponent]
})
export class PopoverVisibilityModule { }
