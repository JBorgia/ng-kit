import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitPopoverModule } from 'ng-kit';

import { PopoverCustomclassComponent } from './popover-custom-class';

@NgModule({
  imports: [
    BrowserModule,
    NgKitPopoverModule,
    NgKitButtonModule,
  ],
  declarations: [PopoverCustomclassComponent],
  exports: [PopoverCustomclassComponent],
  bootstrap: [PopoverCustomclassComponent]
})
export class PopoverCustomClassModule { }
