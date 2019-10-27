import { NgModule } from '@angular/core';

import { ComponentWrapperComponent } from '../../demo-utility/component-wrapper/component-wrapper.component';
import { DemosSharedModule } from '../../demo-utility/demos-shared.module';
import { ApiPageComponent } from '../shared/api-page/api-page.component';
import { ComponentsSharedModule, DemoList } from '../shared/components.module';
import { ExamplesPageComponent } from '../shared/examples-page/examples.component';
import { PaginationAdvancedComponent } from './demos/advanced/pagination-advanced';
import { PaginationAdvancedModule } from './demos/advanced/pagination-advanced.module';
import { PaginationBasicComponent } from './demos/basic/pagination-basic';
import { PaginationBasicModule } from './demos/basic/pagination-basic.module';
import { PaginationConfigComponent } from './demos/config/pagination-config';
import { PaginationConfigModule } from './demos/config/pagination-config.module';
import { PaginationCustomizationComponent } from './demos/customization/pagination-customization';
import { PaginationCustomizationModule } from './demos/customization/pagination-customization.module';
import { PaginationDisabledComponent } from './demos/disabled/pagination-disabled';
import { PaginationDisabledModule } from './demos/disabled/pagination-disabled.module';
import { PaginationJustifyComponent } from './demos/justify/pagination-justify';
import { PaginationJustifyModule } from './demos/justify/pagination-justify.module';
import { PaginationSizeComponent } from './demos/size/pagination-size';
import { PaginationSizeModule } from './demos/size/pagination-size.module';
import { PaginationOverviewComponent } from './overview/pagination-overview.component';

const OVERVIEW = {
  'basic-usage': 'Basic Usage',
  'customization': 'Customization'
};

const DEMOS = {
  basic: {
    title: 'Basic',
    type: PaginationBasicComponent,
    code: require('!!raw-loader!./demos/basic/pagination-basic').default,
    markup: require('!!raw-loader!./demos/basic/pagination-basic.html').default
  },
  advanced: {
    title: 'Advanced',
    type: PaginationAdvancedComponent,
    code: require('!!raw-loader!./demos/advanced/pagination-advanced').default,
    markup: require('!!raw-loader!./demos/advanced/pagination-advanced.html').default
  },
  customization: {
    title: 'Custom links',
    type: PaginationCustomizationComponent,
    code: require('!!raw-loader!./demos/customization/pagination-customization').default,
    markup: require('!!raw-loader!./demos/customization/pagination-customization.html').default
  },
  size: {
    title: 'Pagination size',
    type: PaginationSizeComponent,
    code: require('!!raw-loader!./demos/size/pagination-size').default,
    markup: require('!!raw-loader!./demos/size/pagination-size.html').default
  },
  justify: {
    title: 'Pagination alignment',
    type: PaginationJustifyComponent,
    code: require('!!raw-loader!./demos/justify/pagination-justify').default,
    markup: require('!!raw-loader!./demos/justify/pagination-justify.html').default
  },
  disabled: {
    title: 'Disabled pagination',
    type: PaginationDisabledComponent,
    code: require('!!raw-loader!./demos/disabled/pagination-disabled').default,
    markup: require('!!raw-loader!./demos/disabled/pagination-disabled.html').default
  },
  config: {
    title: 'Global configuration',
    type: PaginationConfigComponent,
    code: require('!!raw-loader!./demos/config/pagination-config').default,
    markup: require('!!raw-loader!./demos/config/pagination-config.html').default
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'overview' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: { OVERVIEW },
    children: [
      { path: 'overview', component: PaginationOverviewComponent },
      { path: 'examples', component: ExamplesPageComponent },
      { path: 'api', component: ApiPageComponent }
    ]
  }
];

@NgModule({
  imports: [
    DemosSharedModule,
    ComponentsSharedModule,
    PaginationAdvancedModule,
    PaginationBasicModule,
    PaginationSizeModule,
    PaginationConfigModule,
    PaginationCustomizationModule,
    PaginationDisabledModule,
    PaginationJustifyModule
  ],
  declarations: [PaginationOverviewComponent]
})
export class PaginationDemoModule {
  constructor(demoList: DemoList) {
    demoList.register('pagination', DEMOS, OVERVIEW);
  }
}
