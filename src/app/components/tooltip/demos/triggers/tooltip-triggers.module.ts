import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkTooltipModule } from 'ng-kit';

import { TooltipTriggersComponent } from './tooltip-triggers';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgkTooltipModule,
    NgkButtonModule,
  ],
  declarations: [TooltipTriggersComponent],
  exports: [TooltipTriggersComponent],
  bootstrap: [TooltipTriggersComponent]
})
export class TooltipTriggersModule { }
