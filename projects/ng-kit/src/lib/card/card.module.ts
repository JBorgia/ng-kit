import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { XmCardBodyDirective, XmCardComponent, XmCardControlsAreaDirective, XmCardTitleAreaDirective } from './card';
import { XmCardBadgeComponent } from './card-badge.component';
import { XmCardBodyComponent } from './card-body.component';
import { XmCardControlsComponent } from './card-controls.component';
import { XmCardHeaderComponent } from './card-header.component';

@NgModule({
  declarations: [
    XmCardBadgeComponent,
    XmCardBodyComponent,
    XmCardComponent,
    XmCardHeaderComponent,
    XmCardBodyDirective,
    XmCardTitleAreaDirective,
    XmCardControlsAreaDirective,
    XmCardControlsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    XmCardBadgeComponent,
    XmCardComponent,
    XmCardBodyDirective,
    XmCardTitleAreaDirective,
    XmCardControlsAreaDirective,
    XmCardControlsComponent,
  ]
})
export class XmCardModule { }
