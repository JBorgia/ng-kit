import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgKitCollapseComponent, NgKitCollapseContentComponent, NgKitCollapseToggleDirective } from './collapse';

export { NgKitCollapseComponent, NgKitCollapseToggleDirective, NgKitCollapseContentComponent } from './collapse';

@NgModule({
  declarations: [NgKitCollapseComponent, NgKitCollapseToggleDirective, NgKitCollapseContentComponent],
  imports: [
    CommonModule,
  ],
  exports: [NgKitCollapseComponent, NgKitCollapseToggleDirective, NgKitCollapseContentComponent]
})
export class NgKitCollapseModule { }
