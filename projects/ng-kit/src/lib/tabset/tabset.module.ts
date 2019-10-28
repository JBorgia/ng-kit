import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgKitTabContentDirective, NgKitTabDirective, NgKitTabsetComponent, NgKitTabTitleDirective } from './tabset';

export { NgKitTabChangeEvent } from './tab-change-event';

@NgModule({
  declarations: [
    NgKitTabsetComponent,
    NgKitTabDirective,
    NgKitTabContentDirective,
    NgKitTabTitleDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgKitTabsetComponent,
    NgKitTabDirective,
    NgKitTabContentDirective,
    NgKitTabTitleDirective,
  ]
})
export class NgKitTabsetModule { }
