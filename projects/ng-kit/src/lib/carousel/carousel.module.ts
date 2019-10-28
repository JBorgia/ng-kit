import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgKitCarouselComponent, NgKitSlideDirective } from './carousel';

export {
    NgKitCarouselComponent,
    NgKitSlideDirective,
    NgKitSlideEvent,
    NgKitSlideEventDirection,
    NgKitSlideEventSource
} from './carousel';
export { NgKitCarouselConfig } from './carousel-config';

@NgModule({
    declarations: [
        NgKitCarouselComponent,
        NgKitSlideDirective
    ],
    exports: [
        NgKitCarouselComponent,
        NgKitSlideDirective
    ],
    imports: [
        CommonModule
    ]
})
export class NgKitCarouselModule {
}
