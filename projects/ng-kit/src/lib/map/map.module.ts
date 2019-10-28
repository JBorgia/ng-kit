import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgkMapComponent } from './map';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    NgkMapComponent
  ],
  exports: [
    NgkMapComponent
  ],
  providers: []
})
export class NgkMapModule { }
