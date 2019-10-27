import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmTooltipModule } from 'ng-kit';

import { TooltipBasicComponent } from './tooltip-basic';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    XmTooltipModule,
    XmButtonModule,
  ],
  declarations: [TooltipBasicComponent],
  exports: [TooltipBasicComponent],
  bootstrap: [TooltipBasicComponent]
})
export class TooltipBasicModule { }
