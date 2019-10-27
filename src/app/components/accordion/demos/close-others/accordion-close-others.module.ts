import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmAccordionModule, XmButtonModule } from 'ng-kit';

import { AccordionCloseOthersComponent } from './accordion-close-others.component';


@NgModule({
  imports: [
    BrowserModule,
    XmButtonModule,
    XmAccordionModule,
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
