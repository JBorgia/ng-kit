import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkTooltipModule } from 'ng-kit';

import { TooltipBasicComponent } from './tooltip-basic';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgkTooltipModule,
    NgkButtonModule,
  ],
  declarations: [TooltipBasicComponent],
  exports: [TooltipBasicComponent],
  bootstrap: [TooltipBasicComponent]
})
export class TooltipBasicModule { }
