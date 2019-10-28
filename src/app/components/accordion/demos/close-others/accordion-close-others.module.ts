import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitAccordionModule, NgKitButtonModule } from 'ng-kit';

import { AccordionCloseOthersComponent } from './accordion-close-others.component';


@NgModule({
  imports: [
    BrowserModule,
    NgKitButtonModule,
    NgKitAccordionModule,
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
