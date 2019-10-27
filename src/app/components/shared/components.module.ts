import { NgModule } from '@angular/core';
import { XmButtonModule, XmTabsetModule } from 'ng-kit';

import { DemosSharedModule } from '../../demo-utility/demos-shared.module';
import { ApiDocsBadgeComponent, ApiDocsClassComponent, ApiDocsComponent, ApiDocsConfigComponent } from './api-docs';
import { ApiPageComponent } from './api-page/api-page.component';
import { WidgetDemoComponent } from './examples-page/demo.component';
import { ExamplesPageComponent } from './examples-page/examples.component';
import { OverviewDirective, OverviewSectionComponent } from './overview';

export * from './demo-list';

@NgModule({
  imports: [
    DemosSharedModule,
    XmTabsetModule,
    XmButtonModule
  ],
  declarations: [
    ExamplesPageComponent,
    WidgetDemoComponent,
    OverviewDirective,
    OverviewSectionComponent,
    ApiDocsComponent,
    ApiDocsConfigComponent,
    ApiDocsClassComponent,
    ApiDocsBadgeComponent,
    ApiPageComponent,
  ],
  exports: [
    ExamplesPageComponent,
    WidgetDemoComponent,
    OverviewDirective,
    OverviewSectionComponent,
    ApiDocsComponent,
    ApiDocsConfigComponent,
    ApiDocsClassComponent,
    ApiDocsBadgeComponent,
    ApiPageComponent,
  ]
})
export class ComponentsSharedModule { }