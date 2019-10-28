import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitTooltipModule } from 'ng-kit';

import { TooltipTriggersComponent } from './tooltip-triggers';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgKitTooltipModule,
    NgKitButtonModule,
  ],
  declarations: [TooltipTriggersComponent],
  exports: [TooltipTriggersComponent],
  bootstrap: [TooltipTriggersComponent]
})
export class TooltipTriggersModule { }
