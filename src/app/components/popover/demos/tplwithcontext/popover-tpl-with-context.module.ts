import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitPopoverModule } from 'ng-kit';

import { PopoverTplwithcontextComponent } from './popover-tpl-with-context';

@NgModule({
  imports: [
    BrowserModule,
    NgKitPopoverModule,
    NgKitButtonModule,
  ],
  declarations: [PopoverTplwithcontextComponent],
  exports: [PopoverTplwithcontextComponent],
  bootstrap: [PopoverTplwithcontextComponent]
})
export class PopoverTplWithContextModule { }
