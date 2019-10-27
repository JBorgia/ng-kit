import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmCarouselModule } from 'ng-kit';

import { CarouselNavigationComponent } from './carousel-navigation';

@NgModule({
  imports: [
    BrowserModule,
    XmCarouselModule,
    XmButtonModule
  ],
  declarations: [CarouselNavigationComponent],
  exports: [CarouselNavigationComponent],
  bootstrap: [CarouselNavigationComponent]
})
export class CarouselNavigationModule { }
