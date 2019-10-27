import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  XmPaginationComponent,
  XmPaginationEllipsisDirective,
  XmPaginationFirstDirective,
  XmPaginationLastDirective,
  XmPaginationNextDirective,
  XmPaginationNumberDirective,
  XmPaginationPreviousDirective,
} from './pagination';

export {
  XmPaginationComponent,
  XmPaginationEllipsisDirective,
  XmPaginationFirstDirective,
  XmPaginationLastDirective,
  XmPaginationNextDirective,
  XmPaginationNumberDirective,
  XmPaginationPreviousDirective,
  XmPaginationConfig,
} from './pagination';


@NgModule({
  declarations: [
    XmPaginationComponent,
    XmPaginationEllipsisDirective,
    XmPaginationFirstDirective,
    XmPaginationLastDirective,
    XmPaginationNextDirective,
    XmPaginationNumberDirective,
    XmPaginationPreviousDirective
  ],
  exports: [
    XmPaginationComponent,
    XmPaginationEllipsisDirective,
    XmPaginationFirstDirective,
    XmPaginationLastDirective,
    XmPaginationNextDirective,
    XmPaginationNumberDirective,
    XmPaginationPreviousDirective
  ],
  imports: [
    CommonModule
  ]
})
export class XmPaginationModule {
}