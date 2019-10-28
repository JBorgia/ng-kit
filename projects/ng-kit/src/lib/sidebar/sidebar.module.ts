import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgkDirectivesModule } from '../directives/directives.module';
import { NgkSidebarComponent } from './sidebar';
import { NgkLiComponent } from './sidebar-li.component';
import { NgkSubLiComponent } from './sidebar-sub-li.component';

@NgModule({
  imports: [
    CommonModule,
    NgkDirectivesModule,
  ],
  declarations: [
    NgkSidebarComponent,
    NgkLiComponent,
    NgkSubLiComponent
  ],
  exports: [
    NgkSidebarComponent,
    NgkLiComponent,
    NgkSubLiComponent,
  ],
  providers: []
})
export class NgkSidebarModule { }
