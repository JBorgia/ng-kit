import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkCarouselModule } from 'ng-kit';

import { CarouselConfigComponent } from './carousel-config';

@NgModule({
  imports: [BrowserModule, NgkCarouselModule],
  declarations: [CarouselConfigComponent],
  exports: [CarouselConfigComponent],
  bootstrap: [CarouselConfigComponent]
})
export class CarouselConfigModule { }
