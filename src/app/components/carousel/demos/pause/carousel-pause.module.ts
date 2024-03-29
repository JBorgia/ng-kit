import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkCarouselModule } from 'ng-kit';

import { CarouselPauseComponent } from './carousel-pause';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgkCarouselModule,
    NgkButtonModule
  ],
  declarations: [CarouselPauseComponent],
  exports: [CarouselPauseComponent],
  bootstrap: [CarouselPauseComponent]
})
export class CarouselPauseModule { }
