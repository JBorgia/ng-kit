import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitAccordionModule, NgKitButtonModule } from 'ng-kit';

import { AccordionTrackChangesComponent } from './accordion-track-changes.component';


@NgModule({
  imports: [
    BrowserModule,
    NgKitButtonModule,
    NgKitAccordionModule,
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
