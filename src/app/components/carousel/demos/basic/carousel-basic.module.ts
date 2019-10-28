import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkCarouselModule } from 'ng-kit';

import { CarouselBasicComponent } from './carousel-basic';

@NgModule({
  imports: [BrowserModule, NgkCarouselModule],
  declarations: [CarouselBasicComponent],
  exports: [CarouselBasicComponent],
  bootstrap: [CarouselBasicComponent]
})
export class CarouselBasicModule { }
