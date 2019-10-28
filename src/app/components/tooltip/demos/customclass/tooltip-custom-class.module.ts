import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkTooltipModule } from 'ng-kit';

import { TooltipCustomclassComponent } from './tooltip-custom-class';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgkTooltipModule,
    NgkButtonModule,
  ],
  declarations: [TooltipCustomclassComponent],
  exports: [TooltipCustomclassComponent],
  bootstrap: [TooltipCustomclassComponent]
})
export class TooltipCustomClassModule { }
