import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitAccordionModule, NgKitButtonModule } from 'ng-kit';

import { AccordionDefaultComponent } from './accordion-default.component';

@NgModule({
  imports: [
    BrowserModule,
    NgKitButtonModule,
    NgKitAccordionModule,
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
