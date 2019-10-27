import { Component, ViewChild } from '@angular/core';
import { XmCarouselComponent, XmSlideEvent, XmSlideEventSource } from 'ng-kit';


@Component({
  selector: 'ng-kit-carousel-pause',
  templateUrl: './carousel-pause.html',
  styleUrls: ['./carousel-pause.scss']
})
export class CarouselPauseComponent {
  images = [1, 2, 3, 4, 5, 6, 7].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel', { static: true }) carousel: XmCarouselComponent;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: XmSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === XmSlideEventSource.ARROW_LEFT || slideEvent.source === XmSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === XmSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}
