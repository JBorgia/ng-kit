import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmAccordionModule, XmButtonModule } from 'ng-kit';

import { AccordionDisableTransitionComponent } from './accordion-disable-transition.component';


@NgModule({
  imports: [
    BrowserModule,
    XmButtonModule,
    XmAccordionModule,
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
