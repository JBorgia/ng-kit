import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SwatchComponent } from './swatch/swatch.component';
import { SwatchesComponent } from './swatches.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    SwatchesComponent,
    SwatchComponent,
  ],
  exports: [
    SwatchesComponent,
    SwatchComponent,
  ],
  bootstrap: [
    SwatchesComponent,
    SwatchComponent,
  ]
})
export class SwatchesDemoModule { }
