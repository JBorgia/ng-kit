import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { XmDirectivesModule } from '../directives/directives.module';
import { XmSidebarComponent } from './sidebar';
import { XmLiComponent } from './sidebar-li.component';
import { XmSubLiComponent } from './sidebar-sub-li.component';

@NgModule({
  imports: [
    CommonModule,
    XmDirectivesModule,
  ],
  declarations: [
    XmSidebarComponent,
    XmLiComponent,
    XmSubLiComponent
  ],
  exports: [
    XmSidebarComponent,
    XmLiComponent,
    XmSubLiComponent,
  ],
  providers: []
})
export class XmSidebarModule { }
