import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgKitHighlightComponent } from './highlight';
import { NgKitTypeaheadDirective } from './typeahead';
import { NgKitTypeaheadWindowComponent } from './typeahead-window.component';

export { NgKitHighlightComponent } from './highlight';
export { NgKitTypeaheadWindowComponent } from './typeahead-window.component';
export { NgKitTypeaheadConfig, NgKitTypeaheadDirective, NgKitTypeaheadSelectItemEvent } from './typeahead';

@NgModule({
  declarations: [
    NgKitTypeaheadDirective,
    NgKitHighlightComponent,
    NgKitTypeaheadWindowComponent
  ],
  exports: [
    NgKitTypeaheadDirective,
    NgKitHighlightComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    NgKitTypeaheadWindowComponent
  ]
})
export class NgKitTypeaheadModule { }
