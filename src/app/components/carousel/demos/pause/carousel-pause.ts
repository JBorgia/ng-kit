import { Component, ViewChild } from '@angular/core';
import { NgKitCarouselComponent, NgKitSlideEvent, NgKitSlideEventSource } from 'ng-kit';


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

  @ViewChild('carousel', { static: true }) carousel: NgKitCarouselComponent;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgKitSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgKitSlideEventSource.ARROW_LEFT || slideEvent.source === NgKitSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgKitSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}
