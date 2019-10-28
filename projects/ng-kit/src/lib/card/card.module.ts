import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgkCardBodyDirective, NgkCardComponent, NgkCardControlsAreaDirective, NgkCardTitleAreaDirective } from './card';
import { NgkCardBadgeComponent } from './card-badge.component';
import { NgkCardBodyComponent } from './card-body.component';
import { NgkCardControlsComponent } from './card-controls.component';
import { NgkCardHeaderComponent } from './card-header.component';

@NgModule({
  declarations: [
    NgkCardBadgeComponent,
    NgkCardBodyComponent,
    NgkCardComponent,
    NgkCardHeaderComponent,
    NgkCardBodyDirective,
    NgkCardTitleAreaDirective,
    NgkCardControlsAreaDirective,
    NgkCardControlsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgkCardBadgeComponent,
    NgkCardComponent,
    NgkCardBodyDirective,
    NgkCardTitleAreaDirective,
    NgkCardControlsAreaDirective,
    NgkCardControlsComponent,
  ]
})
export class NgkCardModule { }
