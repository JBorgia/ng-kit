import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmPopoverModule } from 'ng-kit';

import { PopoverVisibilityComponent } from './popover-visibility';

@NgModule({
  imports: [
    BrowserModule,
    XmPopoverModule,
    XmButtonModule,
  ],
  declarations: [PopoverVisibilityComponent],
  exports: [PopoverVisibilityComponent],
  bootstrap: [PopoverVisibilityComponent]
})
export class PopoverVisibilityModule { }
