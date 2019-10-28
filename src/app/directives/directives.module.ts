import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgkFocusDirective } from './focus.directive';
import { NgkResizedEventModule } from './resized/resized-event.module';

@NgModule({
  imports: [
    CommonModule,
    NgkResizedEventModule,
  ],
  declarations: [
    NgkFocusDirective,
  ],
  exports: [
    NgkFocusDirective,
    NgkResizedEventModule,
  ],
})
export class NgkDirectivesModule { }
