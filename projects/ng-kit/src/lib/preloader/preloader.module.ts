import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgKitDirectivesModule } from '../directives/directives.module';
import { NgKitPreloaderComponent } from './preloader';

@NgModule({
  imports: [
    CommonModule,
    NgKitDirectivesModule
  ],
  declarations: [NgKitPreloaderComponent],
  exports: [NgKitPreloaderComponent]
})
export class NgKitPreloaderModule { }
