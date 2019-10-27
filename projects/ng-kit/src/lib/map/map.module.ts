import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { XmMapComponent } from './map';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    XmMapComponent
  ],
  exports: [
    XmMapComponent
  ],
  providers: []
})
export class XmMapModule { }
