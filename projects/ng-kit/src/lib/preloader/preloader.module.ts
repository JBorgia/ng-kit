import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { XmDirectivesModule } from '../directives/directives.module';
import { XmPreloaderComponent } from './preloader';

@NgModule({
  imports: [
    CommonModule,
    XmDirectivesModule
  ],
  declarations: [XmPreloaderComponent],
  exports: [XmPreloaderComponent]
})
export class XmPreloaderModule { }
