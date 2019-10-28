import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkPopoverModule } from 'ng-kit';

import { PopoverConfigComponent } from './popover-config';

@NgModule({
  imports: [
    BrowserModule,
    NgkPopoverModule,
    NgkButtonModule,
  ],
  declarations: [PopoverConfigComponent],
  exports: [PopoverConfigComponent],
  bootstrap: [PopoverConfigComponent]
})
export class PopoverConfigModule { }
