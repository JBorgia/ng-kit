import { Component } from '@angular/core';

@Component({
  selector: 'ng-kit-carousel-basic',
  templateUrl: './carousel-basic.html',
  styleUrls: ['./carousel-basic.scss']
})
export class CarouselBasicComponent {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
}
