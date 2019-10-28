import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkPopoverModule } from 'ng-kit';

import { PopoverAutocloseComponent } from './popover-auto-close';

@NgModule({
  imports: [
    BrowserModule,
    NgkPopoverModule,
    NgkButtonModule,
  ],
  declarations: [PopoverAutocloseComponent],
  exports: [PopoverAutocloseComponent],
  bootstrap: [PopoverAutocloseComponent]
})
export class PopoverAutocloseModule { }
