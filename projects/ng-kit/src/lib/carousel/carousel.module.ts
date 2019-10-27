import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { XmCarouselComponent, XmSlideDirective } from './carousel';

export {
    XmCarouselComponent,
    XmSlideDirective,
    XmSlideEvent,
    XmSlideEventDirection,
    XmSlideEventSource
} from './carousel';
export { XmCarouselConfig } from './carousel-config';

@NgModule({
    declarations: [
        XmCarouselComponent,
        XmSlideDirective
    ],
    exports: [
        XmCarouselComponent,
        XmSlideDirective
    ],
    imports: [
        CommonModule
    ]
})
export class XmCarouselModule {
}
