import { NgModule } from '@angular/core';

import { ComponentWrapperComponent } from '../../demo-utility/component-wrapper/component-wrapper.component';
import { DemosSharedModule } from '../../demo-utility/demos-shared.module';
import { ApiPageComponent } from '../shared/api-page/api-page.component';
import { ComponentsSharedModule, DemoList } from '../shared/components.module';
import { ExamplesPageComponent } from '../shared/examples-page/examples.component';
import { DropdownBasicComponent } from './demos/basic/dropdown-basic';
import { DropdownBasicModule } from './demos/basic/dropdown-basic.module';
import { DropdownConfigComponent } from './demos/config/dropdown-config';
import { DropdownConfigModule } from './demos/config/dropdown-config.module';
import { DropdownFormComponent } from './demos/form/dropdown-form';
import { DropdownFormModule } from './demos/form/dropdown-form.module';
import { DropdownManualComponent } from './demos/manual/dropdown-manual';
import { DropdownManualModule } from './demos/manual/dropdown-manual.module';

const DEMOS = {
  basic: {
    title: 'Basic',
    type: DropdownBasicComponent,
    code: require('!!raw-loader!./demos/basic/dropdown-basic').default,
    markup: require('!!raw-loader!./demos/basic/dropdown-basic.html').default,
    stylesheet: require('!!raw-loader!./demos/basic/dropdown-basic.scss').default,
  },
  manual: {
    title: 'Manual and custom triggers',
    type: DropdownManualComponent,
    code: require('!!raw-loader!./demos/manual/dropdown-manual').default,
    markup: require('!!raw-loader!./demos/manual/dropdown-manual.html').default,
    stylesheet: require('!!raw-loader!./demos/manual/dropdown-manual.scss').default
  },
  form: {
    title: 'Mixed menu items and form',
    type: DropdownFormComponent,
    code: require('!!raw-loader!./demos/form/dropdown-form').default,
    markup: require('!!raw-loader!./demos/form/dropdown-form.html').default,
    stylesheet: require('!!raw-loader!./demos/form/dropdown-form.scss').default
  },
  config: {
    title: 'Global configuration of dropdowns',
    type: DropdownConfigComponent,
    code: require('!!raw-loader!./demos/config/dropdown-config').default,
    markup: require('!!raw-loader!./demos/config/dropdown-config.html').default,
    stylesheet: require('!!raw-loader!./demos/config/dropdown-config.scss').default
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    children: [
      { path: 'examples', component: ExamplesPageComponent },
      { path: 'api', component: ApiPageComponent }
    ]
  }
];

@NgModule({
  imports: [
    DemosSharedModule,
    ComponentsSharedModule,
    DropdownBasicModule,
    DropdownConfigModule,
    DropdownManualModule,
    DropdownFormModule,
  ]
})
export class DropdownDemoModule {
  constructor(demoList: DemoList) {
    demoList.register('dropdown', DEMOS);
  }
}
