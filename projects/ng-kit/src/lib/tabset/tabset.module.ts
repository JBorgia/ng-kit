import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { XmTabContentDirective, XmTabDirective, XmTabsetComponent, XmTabTitleDirective } from './tabset';

export { XmTabChangeEvent } from './tab-change-event';

@NgModule({
  declarations: [
    XmTabsetComponent,
    XmTabDirective,
    XmTabContentDirective,
    XmTabTitleDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    XmTabsetComponent,
    XmTabDirective,
    XmTabContentDirective,
    XmTabTitleDirective,
  ]
})
export class XmTabsetModule { }
