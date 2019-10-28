import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitCarouselModule } from 'ng-kit';

import { CarouselBasicComponent } from './carousel-basic';

@NgModule({
  imports: [BrowserModule, NgKitCarouselModule],
  declarations: [CarouselBasicComponent],
  exports: [CarouselBasicComponent],
  bootstrap: [CarouselBasicComponent]
})
export class CarouselBasicModule { }
