import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitCarouselModule } from 'ng-kit';

import { CarouselNavigationComponent } from './carousel-navigation';

@NgModule({
  imports: [
    BrowserModule,
    NgKitCarouselModule,
    NgKitButtonModule
  ],
  declarations: [CarouselNavigationComponent],
  exports: [CarouselNavigationComponent],
  bootstrap: [CarouselNavigationComponent]
})
export class CarouselNavigationModule { }
