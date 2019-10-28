import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgKitProgressbarComponent } from './progressbar';

export { NgKitProgressbarComponent, NgKitProgressbarConfig } from './progressbar';

@NgModule({
  declarations: [NgKitProgressbarComponent],
  exports: [NgKitProgressbarComponent],
  imports: [CommonModule]
})
export class NgKitProgressbarModule { }
