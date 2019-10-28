import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkTooltipModule } from 'ng-kit';

import { TooltipContainerComponent } from './tooltip-container';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgkTooltipModule,
    NgkButtonModule,
  ],
  declarations: [TooltipContainerComponent],
  exports: [TooltipContainerComponent],
  bootstrap: [TooltipContainerComponent]
})
export class TooltipContainerModule { }
