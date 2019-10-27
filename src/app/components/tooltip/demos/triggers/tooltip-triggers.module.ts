import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmTooltipModule } from 'ng-kit';

import { TooltipTriggersComponent } from './tooltip-triggers';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    XmTooltipModule,
    XmButtonModule,
  ],
  declarations: [TooltipTriggersComponent],
  exports: [TooltipTriggersComponent],
  bootstrap: [TooltipTriggersComponent]
})
export class TooltipTriggersModule { }
