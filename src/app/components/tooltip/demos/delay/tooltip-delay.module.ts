import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkTooltipModule } from 'ng-kit';

import { TooltipDelayComponent } from './tooltip-delay';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgkTooltipModule,
    NgkButtonModule,
  ],
  declarations: [TooltipDelayComponent],
  exports: [TooltipDelayComponent],
  bootstrap: [TooltipDelayComponent]
})
export class TooltipDelayModule { }
