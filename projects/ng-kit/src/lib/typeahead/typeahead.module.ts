import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgkHighlightComponent } from './highlight';
import { NgkTypeaheadDirective } from './typeahead';
import { NgkTypeaheadWindowComponent } from './typeahead-window.component';

export { NgkHighlightComponent } from './highlight';
export { NgkTypeaheadWindowComponent } from './typeahead-window.component';
export { NgkTypeaheadConfig, NgkTypeaheadDirective, NgkTypeaheadSelectItemEvent } from './typeahead';

@NgModule({
  declarations: [
    NgkTypeaheadDirective,
    NgkHighlightComponent,
    NgkTypeaheadWindowComponent
  ],
  exports: [
    NgkTypeaheadDirective,
    NgkHighlightComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    NgkTypeaheadWindowComponent
  ]
})
export class NgkTypeaheadModule { }
