import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkCarouselModule } from 'ng-kit';

import { CarouselNavigationComponent } from './carousel-navigation';

@NgModule({
  imports: [
    BrowserModule,
    NgkCarouselModule,
    NgkButtonModule
  ],
  declarations: [CarouselNavigationComponent],
  exports: [CarouselNavigationComponent],
  bootstrap: [CarouselNavigationComponent]
})
export class CarouselNavigationModule { }
