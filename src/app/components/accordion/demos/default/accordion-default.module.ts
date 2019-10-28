import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkAccordionModule, NgkButtonModule } from 'ng-kit';

import { AccordionDefaultComponent } from './accordion-default.component';

@NgModule({
  imports: [
    BrowserModule,
    NgkButtonModule,
    NgkAccordionModule,
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
