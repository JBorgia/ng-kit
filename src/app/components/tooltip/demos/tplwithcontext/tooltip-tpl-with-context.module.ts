import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitTooltipModule } from 'ng-kit';

import { TooltipTplwithcontextComponent } from './tooltip-tpl-with-context';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgKitTooltipModule,
    NgKitButtonModule,
  ],
  declarations: [TooltipTplwithcontextComponent],
  exports: [TooltipTplwithcontextComponent],
  bootstrap: [TooltipTplwithcontextComponent]
})
export class TooltipTplWithContextModule { }
