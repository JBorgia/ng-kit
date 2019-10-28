import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgKitDirectivesModule } from '../directives/directives.module';
import { NgKitSidebarComponent } from './sidebar';
import { NgKitLiComponent } from './sidebar-li.component';
import { NgKitSubLiComponent } from './sidebar-sub-li.component';

@NgModule({
  imports: [
    CommonModule,
    NgKitDirectivesModule,
  ],
  declarations: [
    NgKitSidebarComponent,
    NgKitLiComponent,
    NgKitSubLiComponent
  ],
  exports: [
    NgKitSidebarComponent,
    NgKitLiComponent,
    NgKitSubLiComponent,
  ],
  providers: []
})
export class NgKitSidebarModule { }
