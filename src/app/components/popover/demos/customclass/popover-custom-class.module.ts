import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmPopoverModule } from 'ng-kit';

import { PopoverCustomclassComponent } from './popover-custom-class';

@NgModule({
  imports: [
    BrowserModule,
    XmPopoverModule,
    XmButtonModule,
  ],
  declarations: [PopoverCustomclassComponent],
  exports: [PopoverCustomclassComponent],
  bootstrap: [PopoverCustomclassComponent]
})
export class PopoverCustomClassModule { }
