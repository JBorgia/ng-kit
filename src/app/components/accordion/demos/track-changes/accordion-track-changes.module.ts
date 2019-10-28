import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkAccordionModule, NgkButtonModule } from 'ng-kit';

import { AccordionTrackChangesComponent } from './accordion-track-changes.component';


@NgModule({
  imports: [
    BrowserModule,
    NgkButtonModule,
    NgkAccordionModule,
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
