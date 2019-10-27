import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmCarouselModule } from 'ng-kit';

import { CarouselBasicComponent } from './carousel-basic';

@NgModule({
  imports: [BrowserModule, XmCarouselModule],
  declarations: [CarouselBasicComponent],
  exports: [CarouselBasicComponent],
  bootstrap: [CarouselBasicComponent]
})
export class CarouselBasicModule { }
