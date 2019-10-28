import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgkDirectivesModule } from '../directives/directives.module';
import { NgkPreloaderComponent } from './preloader';

@NgModule({
  imports: [
    CommonModule,
    NgkDirectivesModule
  ],
  declarations: [NgkPreloaderComponent],
  exports: [NgkPreloaderComponent]
})
export class NgkPreloaderModule { }
