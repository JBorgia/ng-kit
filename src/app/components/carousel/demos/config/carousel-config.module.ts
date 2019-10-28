import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitCarouselModule } from 'ng-kit';

import { CarouselConfigComponent } from './carousel-config';

@NgModule({
  imports: [BrowserModule, NgKitCarouselModule],
  declarations: [CarouselConfigComponent],
  exports: [CarouselConfigComponent],
  bootstrap: [CarouselConfigComponent]
})
export class CarouselConfigModule { }
