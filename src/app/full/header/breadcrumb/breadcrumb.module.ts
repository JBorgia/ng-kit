import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgkDirectivesModule } from 'ng-kit';

import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbService } from './breadcrumb.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgkDirectivesModule,
  ],
  declarations: [
    BreadcrumbComponent,
  ],
  exports: [
    BreadcrumbComponent,
  ],
  providers: [
    BreadcrumbService
  ]
})
export class BreadcrumbModule { }
