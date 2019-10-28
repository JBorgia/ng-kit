import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgkCarouselComponent, NgkSlideDirective } from './carousel';

export {
    NgkCarouselComponent,
    NgkSlideDirective,
    NgkSlideEvent,
    NgkSlideEventDirection,
    NgkSlideEventSource
} from './carousel';
export { NgkCarouselConfig } from './carousel-config';

@NgModule({
    declarations: [
        NgkCarouselComponent,
        NgkSlideDirective
    ],
    exports: [
        NgkCarouselComponent,
        NgkSlideDirective
    ],
    imports: [
        CommonModule
    ]
})
export class NgkCarouselModule {
}
