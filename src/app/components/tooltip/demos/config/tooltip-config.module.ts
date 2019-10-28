import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkTooltipModule } from 'ng-kit';

import { TooltipConfigComponent } from './tooltip-config';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgkTooltipModule,
    NgkButtonModule
  ],
  declarations: [TooltipConfigComponent],
  exports: [TooltipConfigComponent],
  bootstrap: [TooltipConfigComponent]
})
export class TooltipConfigModule { }
