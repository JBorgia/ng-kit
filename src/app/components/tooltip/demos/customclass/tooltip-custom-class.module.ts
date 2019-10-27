import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmTooltipModule } from 'ng-kit';

import { TooltipCustomclassComponent } from './tooltip-custom-class';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    XmTooltipModule,
    XmButtonModule,
  ],
  declarations: [TooltipCustomclassComponent],
  exports: [TooltipCustomclassComponent],
  bootstrap: [TooltipCustomclassComponent]
})
export class TooltipCustomClassModule { }
