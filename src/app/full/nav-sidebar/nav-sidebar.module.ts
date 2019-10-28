import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgKitDirectivesModule } from '@directives/directives.module';
import { NgKitSidebarModule } from 'ng-kit';

import { NavSidebarComponent } from './nav-sidebar.component';
import { NavSidebarService } from './nav-sidebar.service';

@NgModule({
  imports: [
    CommonModule,
    NgKitSidebarModule,
    NgKitDirectivesModule,
  ],
  declarations: [
    NavSidebarComponent,
  ],
  exports: [
    NavSidebarComponent
  ],
  providers: [NavSidebarService]
})
export class NavSidebarModule { }

