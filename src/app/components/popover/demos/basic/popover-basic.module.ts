import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkPopoverModule } from 'ng-kit';

import { PopoverBasicComponent } from './popover-basic';

@NgModule({
  imports: [
    BrowserModule,
    NgkPopoverModule,
    NgkButtonModule,
  ],
  declarations: [PopoverBasicComponent],
  exports: [PopoverBasicComponent],
  bootstrap: [PopoverBasicComponent]
})
export class PopoverBasicModule { }
