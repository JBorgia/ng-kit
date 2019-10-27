import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { XmDirectivesModule } from '../directives/directives.module';
import { XmAccordionComponent } from './accordion';
import { XmAccordionBodyComponent } from './accordion-body.component';
import { XmAccordionHeaderComponent } from './accordion-header.component';
import {
  XmAccordionBodyDirective,
  XmAccordionHeaderDirective,
  XmAccordionPanelComponent,
} from './accordion-panel.component';

@NgModule({
  imports: [
    CommonModule,
    XmDirectivesModule
  ],
  declarations: [
    XmAccordionBodyComponent,
    XmAccordionBodyDirective,
    XmAccordionComponent,
    XmAccordionHeaderComponent,
    XmAccordionHeaderDirective,
    XmAccordionPanelComponent,
  ],
  exports: [
    XmAccordionBodyDirective,
    XmAccordionComponent,
    XmAccordionHeaderDirective,
    XmAccordionPanelComponent,
  ]
})
export class XmAccordionModule { }
