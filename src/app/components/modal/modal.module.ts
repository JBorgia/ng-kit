import { NgModule } from '@angular/core';

import { ComponentWrapperComponent } from '../../demo-utility/component-wrapper/component-wrapper.component';
import { ApiPageComponent } from '../shared/api-page/api-page.component';
import { ComponentsSharedModule, DemoList } from '../shared/components.module';
import { ExamplesPageComponent } from '../shared/examples-page/examples.component';
import { ModalBasicComponent } from './demos/basic/modal-basic';
import { ModalBasicModule } from './demos/basic/modal-basic.module';
import { ModalComponent } from './demos/component/modal-component';
import { ModalComponentModule } from './demos/component/modal-component.module';
import { ModalConfigComponent } from './demos/config/modal-config';
import { ModalConfigModule } from './demos/config/modal-config.module';
import { ModalOptionsComponent } from './demos/options/modal-options';
import { ModalOptionsModule } from './demos/options/modal-options.module';
import { ModalStackedComponent } from './demos/stacked/modal-stacked';
import { ModalStackedModule } from './demos/stacked/modal-stacked.module';

const DEMOS = {
  basic: {
    title: 'Modal with default options',
    type: ModalBasicComponent,
    code: require('!!raw-loader!./demos/basic/modal-basic').default,
    markup: require('!!raw-loader!./demos/basic/modal-basic.html').default,
    stylesheet: require('!!raw-loader!./demos/basic/modal-basic.scss').default,
  },
  component: {
    title: 'Components as content',
    type: ModalComponent,
    code: require('!!raw-loader!./demos/component/modal-component').default,
    markup: require('!!raw-loader!./demos/component/modal-component.html').default,
    stylesheet: require('!!raw-loader!./demos/component/modal-component.scss').default,
  },
  options: {
    title: 'Modal with options',
    type: ModalOptionsComponent,
    code: require('!!raw-loader!./demos/options/modal-options').default,
    markup: require('!!raw-loader!./demos/options/modal-options.html').default,
    stylesheet: require('!!raw-loader!./demos/options/modal-options.scss').default
  },
  stacked: {
    title: 'Stacked modals',
    type: ModalStackedComponent,
    code: require('!!raw-loader!./demos/stacked/modal-stacked').default,
    markup: require('!!raw-loader!./demos/stacked/modal-stacked.html').default
  },
  config: {
    title: 'Global configuration of modals',
    type: ModalConfigComponent,
    code: require('!!raw-loader!./demos/config/modal-config').default,
    markup: require('!!raw-loader!./demos/config/modal-config.html').default
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
    ComponentsSharedModule,
    ModalBasicModule,
    ModalComponentModule,
    ModalOptionsModule,
    ModalStackedModule,
    ModalConfigModule,
  ]
})
export class ModalDemoModule {
  constructor(demoList: DemoList) {
    demoList.register('modal', DEMOS);
  }
}
