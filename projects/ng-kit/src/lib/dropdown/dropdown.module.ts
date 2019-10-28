import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  NgKitDropdownAnchorDirective,
  NgKitDropdownComponent,
  NgKitDropdownItemDirective,
  NgKitDropdownMenuComponent,
  NgKitDropdownToggleDirective,
} from './dropdown';


export {
  NgKitDropdownComponent,
  NgKitDropdownAnchorDirective,
  NgKitDropdownToggleDirective,
  NgKitDropdownMenuComponent,
  NgKitDropdownItemDirective
} from './dropdown';

const XM_DROPDOWN_DIRECTIVES = [
  NgKitDropdownComponent,
  NgKitDropdownAnchorDirective,
  NgKitDropdownToggleDirective,
  NgKitDropdownMenuComponent,
  NgKitDropdownItemDirective
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
export class NgKitDropdownModule { }
