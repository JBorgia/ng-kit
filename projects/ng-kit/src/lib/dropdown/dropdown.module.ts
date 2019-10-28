import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  NgkDropdownAnchorDirective,
  NgkDropdownComponent,
  NgkDropdownItemDirective,
  NgkDropdownMenuComponent,
  NgkDropdownToggleDirective,
} from './dropdown';


export {
  NgkDropdownComponent,
  NgkDropdownAnchorDirective,
  NgkDropdownToggleDirective,
  NgkDropdownMenuComponent,
  NgkDropdownItemDirective
} from './dropdown';

const XM_DROPDOWN_DIRECTIVES = [
  NgkDropdownComponent,
  NgkDropdownAnchorDirective,
  NgkDropdownToggleDirective,
  NgkDropdownMenuComponent,
  NgkDropdownItemDirective
];

@NgModule({
  declarations: [
    XM_DROPDOWN_DIRECTIVES
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    XM_DROPDOWN_DIRECTIVES
  ]
})
export class NgkDropdownModule { }
