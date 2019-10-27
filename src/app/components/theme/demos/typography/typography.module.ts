import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TypographyComponent } from './typography.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    TypographyComponent
  ],
  exports: [
    TypographyComponent
  ],
  bootstrap: [
    TypographyComponent
  ]
})
export class TypographyDemoModule { }
