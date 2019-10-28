import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgKitMapComponent } from './map';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    NgKitMapComponent
  ],
  exports: [
    NgKitMapComponent
  ],
  providers: []
})
export class NgKitMapModule { }
