import { Component } from '@angular/core';
import { NgkCarouselConfig } from 'ng-kit';

@Component({
  selector: 'ngk-carousel-config',
  templateUrl: './carousel-config.html',
  styleUrls: ['./carousel-config.scss'],
  providers: [NgkCarouselConfig]  // add NgkCarouselConfig to the component providers
})
export class CarouselConfigComponent {
  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(config: NgkCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}
