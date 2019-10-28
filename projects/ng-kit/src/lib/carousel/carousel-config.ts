import { Injectable } from '@angular/core';

/**
 * A configuration service for the [NgKitCarousel](#/components/carousel/api#NgKitCarousel) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all carousels used in the application.
 */
@Injectable({ providedIn: 'root' })
export class NgKitCarouselConfig {
  interval = 5000;
  wrap = true;
  keyboard = true;
  pauseOnHover = true;
  showNavigationArrows = true;
  showNavigationIndicators = true;
}
