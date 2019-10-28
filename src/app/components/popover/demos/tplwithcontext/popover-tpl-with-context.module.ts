import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkPopoverModule } from 'ng-kit';

import { PopoverTplwithcontextComponent } from './popover-tpl-with-context';

@NgModule({
  imports: [
    BrowserModule,
    NgkPopoverModule,
    NgkButtonModule,
  ],
  declarations: [PopoverTplwithcontextComponent],
  exports: [PopoverTplwithcontextComponent],
  bootstrap: [PopoverTplwithcontextComponent]
})
export class PopoverTplWithContextModule { }
