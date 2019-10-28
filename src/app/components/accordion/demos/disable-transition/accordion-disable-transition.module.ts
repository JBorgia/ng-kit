import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitAccordionModule, NgKitButtonModule } from 'ng-kit';

import { AccordionDisableTransitionComponent } from './accordion-disable-transition.component';


@NgModule({
  imports: [
    BrowserModule,
    NgKitButtonModule,
    NgKitAccordionModule,
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
