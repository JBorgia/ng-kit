import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmTooltipModule } from 'ng-kit';

import { TooltipTplwithcontextComponent } from './tooltip-tpl-with-context';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    XmTooltipModule,
    XmButtonModule,
  ],
  declarations: [TooltipTplwithcontextComponent],
  exports: [TooltipTplwithcontextComponent],
  bootstrap: [TooltipTplwithcontextComponent]
})
export class TooltipTplWithContextModule { }
