import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  NgkPaginationComponent,
  NgkPaginationEllipsisDirective,
  NgkPaginationFirstDirective,
  NgkPaginationLastDirective,
  NgkPaginationNextDirective,
  NgkPaginationNumberDirective,
  NgkPaginationPreviousDirective,
} from './pagination';

export {
  NgkPaginationComponent,
  NgkPaginationEllipsisDirective,
  NgkPaginationFirstDirective,
  NgkPaginationLastDirective,
  NgkPaginationNextDirective,
  NgkPaginationNumberDirective,
  NgkPaginationPreviousDirective,
  NgkPaginationConfig,
} from './pagination';


@NgModule({
  declarations: [
    NgkPaginationComponent,
    NgkPaginationEllipsisDirective,
    NgkPaginationFirstDirective,
    NgkPaginationLastDirective,
    NgkPaginationNextDirective,
    NgkPaginationNumberDirective,
    NgkPaginationPreviousDirective
  ],
  exports: [
    NgkPaginationComponent,
    NgkPaginationEllipsisDirective,
    NgkPaginationFirstDirective,
    NgkPaginationLastDirective,
    NgkPaginationNextDirective,
    NgkPaginationNumberDirective,
    NgkPaginationPreviousDirective
  ],
  imports: [
    CommonModule
  ]
})
export class NgkPaginationModule {
}