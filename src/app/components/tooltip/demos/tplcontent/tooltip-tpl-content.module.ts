import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitTooltipModule } from 'ng-kit';

import { TooltipTplcontentComponent } from './tooltip-tpl-content';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgKitTooltipModule,
    NgKitButtonModule,
  ],
  declarations: [TooltipTplcontentComponent],
  exports: [TooltipTplcontentComponent],
  bootstrap: [TooltipTplcontentComponent]
})
export class TooltipTplContentModule { }
