import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmTooltipModule } from 'ng-kit';

import { TooltipConfigComponent } from './tooltip-config';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    XmTooltipModule,
    XmButtonModule
  ],
  declarations: [TooltipConfigComponent],
  exports: [TooltipConfigComponent],
  bootstrap: [TooltipConfigComponent]
})
export class TooltipConfigModule { }
