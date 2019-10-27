import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmAccordionModule, XmButtonModule } from 'ng-kit';

import { AccordionDefaultComponent } from './accordion-default.component';

@NgModule({
  imports: [
    BrowserModule,
    XmButtonModule,
    XmAccordionModule,
  ],
  declarations: [
    AccordionDefaultComponent
  ],
  exports: [
    AccordionDefaultComponent
  ],
  bootstrap: [
    AccordionDefaultComponent
  ]
})
export class AccordionDefaultModule { }
