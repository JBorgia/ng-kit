import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkAccordionModule, NgkButtonModule } from 'ng-kit';

import { AccordionDisableTransitionComponent } from './accordion-disable-transition.component';


@NgModule({
  imports: [
    BrowserModule,
    NgkButtonModule,
    NgkAccordionModule,
  ],
  declarations: [
    AccordionDisableTransitionComponent
  ],
  exports: [
    AccordionDisableTransitionComponent
  ],
  bootstrap: [
    AccordionDisableTransitionComponent
  ]
})
export class AccordionDisableTransitionModule { }
