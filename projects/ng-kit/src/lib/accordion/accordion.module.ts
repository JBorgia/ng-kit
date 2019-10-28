import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgkDirectivesModule } from '../directives/directives.module';
import { NgkAccordionComponent } from './accordion';
import { NgkAccordionBodyComponent } from './accordion-body.component';
import { NgkAccordionHeaderComponent } from './accordion-header.component';
import {
  NgkAccordionBodyDirective,
  NgkAccordionHeaderDirective,
  NgkAccordionPanelComponent,
} from './accordion-panel.component';

@NgModule({
  imports: [
    CommonModule,
    NgkDirectivesModule
  ],
  declarations: [
    NgkAccordionBodyComponent,
    NgkAccordionBodyDirective,
    NgkAccordionComponent,
    NgkAccordionHeaderComponent,
    NgkAccordionHeaderDirective,
    NgkAccordionPanelComponent,
  ],
  exports: [
    NgkAccordionBodyDirective,
    NgkAccordionComponent,
    NgkAccordionHeaderDirective,
    NgkAccordionPanelComponent,
  ]
})
export class NgkAccordionModule { }
