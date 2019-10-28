import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgkTabContentDirective, NgkTabDirective, NgkTabsetComponent, NgkTabTitleDirective } from './tabset';

export { NgkTabChangeEvent } from './tab-change-event';

@NgModule({
  declarations: [
    NgkTabsetComponent,
    NgkTabDirective,
    NgkTabContentDirective,
    NgkTabTitleDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgkTabsetComponent,
    NgkTabDirective,
    NgkTabContentDirective,
    NgkTabTitleDirective,
  ]
})
export class NgkTabsetModule { }
