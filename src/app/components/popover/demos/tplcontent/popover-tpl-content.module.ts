import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitPopoverModule } from 'ng-kit';

import { PopoverTplcontentComponent } from './popover-tpl-content';

@NgModule({
  imports: [
    BrowserModule,
    NgKitPopoverModule,
    NgKitButtonModule,
  ],
  declarations: [PopoverTplcontentComponent],
  exports: [PopoverTplcontentComponent],
  bootstrap: [PopoverTplcontentComponent]
})
export class PopoverTplContentModule { }
