import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmCarouselModule } from 'ng-kit';

import { CarouselConfigComponent } from './carousel-config';

@NgModule({
  imports: [BrowserModule, XmCarouselModule],
  declarations: [CarouselConfigComponent],
  exports: [CarouselConfigComponent],
  bootstrap: [CarouselConfigComponent]
})
export class CarouselConfigModule { }
