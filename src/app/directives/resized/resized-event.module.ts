import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgKitResizeDirective } from './resized.directive';

@NgModule({
  declarations: [NgKitResizeDirective],
  imports: [CommonModule],
  exports: [NgKitResizeDirective]
})
export class NgKitResizedEventModule { }
