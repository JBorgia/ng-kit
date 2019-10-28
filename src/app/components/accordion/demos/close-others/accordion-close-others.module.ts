import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkAccordionModule, NgkButtonModule } from 'ng-kit';

import { AccordionCloseOthersComponent } from './accordion-close-others.component';


@NgModule({
  imports: [
    BrowserModule,
    NgkButtonModule,
    NgkAccordionModule,
  ],
  declarations: [
    AccordionCloseOthersComponent
  ],
  exports: [
    AccordionCloseOthersComponent
  ],
  bootstrap: [
    AccordionCloseOthersComponent
  ]
})
export class AccordionCloseOthersModule { }
