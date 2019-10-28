import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgkDirectivesModule } from '@directives/directives.module';
import { NgkSidebarModule } from 'ng-kit';

import { NavSidebarComponent } from './nav-sidebar.component';
import { NavSidebarService } from './nav-sidebar.service';

@NgModule({
  imports: [
    CommonModule,
    NgkSidebarModule,
    NgkDirectivesModule,
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

