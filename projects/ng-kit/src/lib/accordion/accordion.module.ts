import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgKitDirectivesModule } from '../directives/directives.module';
import { NgKitAccordionComponent } from './accordion';
import { NgKitAccordionBodyComponent } from './accordion-body.component';
import { NgKitAccordionHeaderComponent } from './accordion-header.component';
import {
  NgKitAccordionBodyDirective,
  NgKitAccordionHeaderDirective,
  NgKitAccordionPanelComponent,
} from './accordion-panel.component';

@NgModule({
  imports: [
    CommonModule,
    NgKitDirectivesModule
  ],
  declarations: [
    NgKitAccordionBodyComponent,
    NgKitAccordionBodyDirective,
    NgKitAccordionComponent,
    NgKitAccordionHeaderComponent,
    NgKitAccordionHeaderDirective,
    NgKitAccordionPanelComponent,
  ],
  exports: [
    NgKitAccordionBodyDirective,
    NgKitAccordionComponent,
    NgKitAccordionHeaderDirective,
    NgKitAccordionPanelComponent,
  ]
})
export class NgKitAccordionModule { }
