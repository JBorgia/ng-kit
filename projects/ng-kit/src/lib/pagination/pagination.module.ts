import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  NgKitPaginationComponent,
  NgKitPaginationEllipsisDirective,
  NgKitPaginationFirstDirective,
  NgKitPaginationLastDirective,
  NgKitPaginationNextDirective,
  NgKitPaginationNumberDirective,
  NgKitPaginationPreviousDirective,
} from './pagination';

export {
  NgKitPaginationComponent,
  NgKitPaginationEllipsisDirective,
  NgKitPaginationFirstDirective,
  NgKitPaginationLastDirective,
  NgKitPaginationNextDirective,
  NgKitPaginationNumberDirective,
  NgKitPaginationPreviousDirective,
  NgKitPaginationConfig,
} from './pagination';


@NgModule({
  declarations: [
    NgKitPaginationComponent,
    NgKitPaginationEllipsisDirective,
    NgKitPaginationFirstDirective,
    NgKitPaginationLastDirective,
    NgKitPaginationNextDirective,
    NgKitPaginationNumberDirective,
    NgKitPaginationPreviousDirective
  ],
  exports: [
    NgKitPaginationComponent,
    NgKitPaginationEllipsisDirective,
    NgKitPaginationFirstDirective,
    NgKitPaginationLastDirective,
    NgKitPaginationNextDirective,
    NgKitPaginationNumberDirective,
    NgKitPaginationPreviousDirective
  ],
  imports: [
    CommonModule
  ]
})
export class NgKitPaginationModule {
}