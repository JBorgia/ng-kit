import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitPopoverModule } from 'ng-kit';

import { PopoverBasicComponent } from './popover-basic';

@NgModule({
  imports: [
    BrowserModule,
    NgKitPopoverModule,
    NgKitButtonModule,
  ],
  declarations: [PopoverBasicComponent],
  exports: [PopoverBasicComponent],
  bootstrap: [PopoverBasicComponent]
})
export class PopoverBasicModule { }
