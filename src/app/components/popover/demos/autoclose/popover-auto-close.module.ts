import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitPopoverModule } from 'ng-kit';

import { PopoverAutocloseComponent } from './popover-auto-close';

@NgModule({
  imports: [
    BrowserModule,
    NgKitPopoverModule,
    NgKitButtonModule,
  ],
  declarations: [PopoverAutocloseComponent],
  exports: [PopoverAutocloseComponent],
  bootstrap: [PopoverAutocloseComponent]
})
export class PopoverAutocloseModule { }
