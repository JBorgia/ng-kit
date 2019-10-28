import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkTooltipModule } from 'ng-kit';

import { TooltipTplcontentComponent } from './tooltip-tpl-content';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgkTooltipModule,
    NgkButtonModule,
  ],
  declarations: [TooltipTplcontentComponent],
  exports: [TooltipTplcontentComponent],
  bootstrap: [TooltipTplcontentComponent]
})
export class TooltipTplContentModule { }
