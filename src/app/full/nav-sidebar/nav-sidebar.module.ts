import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { XmDirectivesModule } from '@directives/directives.module';
import { XmSidebarModule } from 'ng-kit';

import { NavSidebarComponent } from './nav-sidebar.component';
import { NavSidebarService } from './nav-sidebar.service';

@NgModule({
  imports: [
    CommonModule,
    XmSidebarModule,
    XmDirectivesModule,
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

