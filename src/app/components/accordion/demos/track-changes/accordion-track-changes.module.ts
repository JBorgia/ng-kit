import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmAccordionModule, XmButtonModule } from 'ng-kit';

import { AccordionTrackChangesComponent } from './accordion-track-changes.component';


@NgModule({
  imports: [
    BrowserModule,
    XmButtonModule,
    XmAccordionModule,
  ],
  declarations: [
    AccordionTrackChangesComponent
  ],
  exports: [
    AccordionTrackChangesComponent
  ],
  bootstrap: [
    AccordionTrackChangesComponent
  ]
})
export class AccordionTrackChangesModule { }
