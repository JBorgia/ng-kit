import { Component } from '@angular/core';
import { XmCarouselConfig } from 'ng-kit';

@Component({
  selector: 'ng-kit-carousel-config',
  templateUrl: './carousel-config.html',
  styleUrls: ['./carousel-config.scss'],
  providers: [XmCarouselConfig]  // add XmCarouselConfig to the component providers
})
export class CarouselConfigComponent {
  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(config: XmCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}
