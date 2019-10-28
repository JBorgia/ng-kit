import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgKitCardBodyDirective, NgKitCardComponent, NgKitCardControlsAreaDirective, NgKitCardTitleAreaDirective } from './card';
import { NgKitCardBadgeComponent } from './card-badge.component';
import { NgKitCardBodyComponent } from './card-body.component';
import { NgKitCardControlsComponent } from './card-controls.component';
import { NgKitCardHeaderComponent } from './card-header.component';

@NgModule({
  declarations: [
    NgKitCardBadgeComponent,
    NgKitCardBodyComponent,
    NgKitCardComponent,
    NgKitCardHeaderComponent,
    NgKitCardBodyDirective,
    NgKitCardTitleAreaDirective,
    NgKitCardControlsAreaDirective,
    NgKitCardControlsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgKitCardBadgeComponent,
    NgKitCardComponent,
    NgKitCardBodyDirective,
    NgKitCardTitleAreaDirective,
    NgKitCardControlsAreaDirective,
    NgKitCardControlsComponent,
  ]
})
export class NgKitCardModule { }
