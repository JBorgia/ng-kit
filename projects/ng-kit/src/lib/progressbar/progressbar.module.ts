import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgkProgressbarComponent } from './progressbar';

export { NgkProgressbarComponent, NgkProgressbarConfig } from './progressbar';

@NgModule({
  declarations: [NgkProgressbarComponent],
  exports: [NgkProgressbarComponent],
  imports: [CommonModule]
})
export class NgkProgressbarModule { }
