import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgKitDirectivesModule } from '@directives/directives.module';
import { NgKitButtonModule } from 'ng-kit';

import { NotFoundComponent } from './not-found.component';

export const ROUTES: Routes = [{
  path: '',
  data: {
    browserTabTitle: '404 - Not Found',
    breadcrumbs: [
      {
        title: 'Dashboard',
        breadcrumbElements: [
          { type: 'url', value: '/home' },
        ]
      },
      {
        titleElement: { type: 'string', value: '404 - Not Found' },
        breadcrumbElements: [
          { type: 'url', value: '/404' },
        ]
      },
    ]
  },
  component: NotFoundComponent
}];

@NgModule({
  imports: [
    CommonModule,
    NgKitButtonModule,
    NgKitDirectivesModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [NotFoundComponent]
})
export class NotFoundModule { }
