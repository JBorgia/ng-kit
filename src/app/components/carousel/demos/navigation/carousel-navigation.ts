import { Component } from '@angular/core';
import { XmCarouselConfig } from 'ng-kit';

@Component({
  selector: 'ng-kit-carousel-navigation',
  templateUrl: './carousel-navigation.html',
  styleUrls: ['./carousel-navigation.scss'],
  providers: [XmCarouselConfig]  // add XmCarouselConfig to the component providers
})
export class CarouselNavigationComponent {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(config: XmCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
}
