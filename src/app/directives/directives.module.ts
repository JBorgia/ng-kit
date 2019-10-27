import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgKitFocusDirective } from './focus.directive';
import { NgKitResizedEventModule } from './resized/resized-event.module';

@NgModule({
  imports: [
    CommonModule,
    NgKitResizedEventModule,
  ],
  declarations: [
    NgKitFocusDirective,
  ],
  exports: [
    NgKitFocusDirective,
    NgKitResizedEventModule,
  ],
})
export class NgKitDirectivesModule { }
