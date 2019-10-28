import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkPopoverModule } from 'ng-kit';

import { PopoverCustomclassComponent } from './popover-custom-class';

@NgModule({
  imports: [
    BrowserModule,
    NgkPopoverModule,
    NgkButtonModule,
  ],
  declarations: [PopoverCustomclassComponent],
  exports: [PopoverCustomclassComponent],
  bootstrap: [PopoverCustomclassComponent]
})
export class PopoverCustomClassModule { }
