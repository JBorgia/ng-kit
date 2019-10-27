import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmTooltipModule } from 'ng-kit';

import { TooltipContainerComponent } from './tooltip-container';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    XmTooltipModule,
    XmButtonModule,
  ],
  declarations: [TooltipContainerComponent],
  exports: [TooltipContainerComponent],
  bootstrap: [TooltipContainerComponent]
})
export class TooltipContainerModule { }
