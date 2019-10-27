import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmTooltipModule } from 'ng-kit';

import { TooltipTplcontentComponent } from './tooltip-tpl-content';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    XmTooltipModule,
    XmButtonModule,
  ],
  declarations: [TooltipTplcontentComponent],
  exports: [TooltipTplcontentComponent],
  bootstrap: [TooltipTplcontentComponent]
})
export class TooltipTplContentModule { }
