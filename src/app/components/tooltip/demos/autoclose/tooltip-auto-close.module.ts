import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitTooltipModule } from 'ng-kit';

import { TooltipAutocloseComponent } from './tooltip-auto-close';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgKitTooltipModule,
    NgKitButtonModule,
  ],
  declarations: [TooltipAutocloseComponent],
  exports: [TooltipAutocloseComponent],
  bootstrap: [TooltipAutocloseComponent]
})
export class TooltipAutocloseModule { }
