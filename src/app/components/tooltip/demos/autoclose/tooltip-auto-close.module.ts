import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmTooltipModule } from 'ng-kit';

import { TooltipAutocloseComponent } from './tooltip-auto-close';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    XmTooltipModule,
    XmButtonModule,
  ],
  declarations: [TooltipAutocloseComponent],
  exports: [TooltipAutocloseComponent],
  bootstrap: [TooltipAutocloseComponent]
})
export class TooltipAutocloseModule { }
