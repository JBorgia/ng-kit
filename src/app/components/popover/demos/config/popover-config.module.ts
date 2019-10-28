import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitPopoverModule } from 'ng-kit';

import { PopoverConfigComponent } from './popover-config';

@NgModule({
  imports: [
    BrowserModule,
    NgKitPopoverModule,
    NgKitButtonModule,
  ],
  declarations: [PopoverConfigComponent],
  exports: [PopoverConfigComponent],
  bootstrap: [PopoverConfigComponent]
})
export class PopoverConfigModule { }
