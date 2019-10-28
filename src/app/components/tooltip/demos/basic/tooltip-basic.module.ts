import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitTooltipModule } from 'ng-kit';

import { TooltipBasicComponent } from './tooltip-basic';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgKitTooltipModule,
    NgKitButtonModule,
  ],
  declarations: [TooltipBasicComponent],
  exports: [TooltipBasicComponent],
  bootstrap: [TooltipBasicComponent]
})
export class TooltipBasicModule { }
