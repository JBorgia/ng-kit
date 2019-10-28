import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkTooltipModule } from 'ng-kit';

import { TooltipTplwithcontextComponent } from './tooltip-tpl-with-context';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgkTooltipModule,
    NgkButtonModule,
  ],
  declarations: [TooltipTplwithcontextComponent],
  exports: [TooltipTplwithcontextComponent],
  bootstrap: [TooltipTplwithcontextComponent]
})
export class TooltipTplWithContextModule { }
