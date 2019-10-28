import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgkCollapseComponent, NgkCollapseContentComponent, NgkCollapseToggleDirective } from './collapse';

export { NgkCollapseComponent, NgkCollapseToggleDirective, NgkCollapseContentComponent } from './collapse';

@NgModule({
  declarations: [NgkCollapseComponent, NgkCollapseToggleDirective, NgkCollapseContentComponent],
  imports: [
    CommonModule,
  ],
  exports: [NgkCollapseComponent, NgkCollapseToggleDirective, NgkCollapseContentComponent]
})
export class NgkCollapseModule { }
