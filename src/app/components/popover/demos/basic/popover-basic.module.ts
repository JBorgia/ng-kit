import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmPopoverModule } from 'ng-kit';

import { PopoverBasicComponent } from './popover-basic';

@NgModule({
  imports: [
    BrowserModule,
    XmPopoverModule,
    XmButtonModule,
  ],
  declarations: [PopoverBasicComponent],
  exports: [PopoverBasicComponent],
  bootstrap: [PopoverBasicComponent]
})
export class PopoverBasicModule { }
