import { NgModule } from '@angular/core';

import { ComponentWrapperComponent } from '../../demo-utility/component-wrapper/component-wrapper.component';
import { DemosSharedModule } from '../../demo-utility/demos-shared.module';
import { ApiPageComponent } from '../shared/api-page/api-page.component';
import { ComponentsSharedModule, DemoList } from '../shared/components.module';
import { ExamplesPageComponent } from '../shared/examples-page/examples.component';
import { ProgressbarBasicComponent } from './demos/basic/progressbar-basic';
import { ProgressbarBasicModule } from './demos/basic/progressbar-basic.module';
import { ProgressbarConfigComponent } from './demos/config/progressbar-config';
import { ProgressbarConfigModule } from './demos/config/progressbar-config.module';
import { ProgressbarHeightComponent } from './demos/height/progressbar-height';
import { ProgressbarHeightModule } from './demos/height/progressbar-height.module';
import { ProgressbarLabelsComponent } from './demos/labels/progressbar-labels';
import { ProgressbarLabelsModule } from './demos/labels/progressbar-labels.module';
import { ProgressbarShowValueModule } from './demos/showvalue/progressbar-show-value.module';
import { ProgressbarShowvalueComponent } from './demos/showvalue/progressbar-showvalue';
import { ProgressbarStripedComponent } from './demos/striped/progressbar-striped';
import { ProgressbarStripedModule } from './demos/striped/progressbar-striped.module';

const DEMOS = {
  basic: {
    title: 'Contextual progress bars',
    type: ProgressbarBasicComponent,
    code: require('!!raw-loader!./demos/basic/progressbar-basic').default,
    markup: require('!!raw-loader!./demos/basic/progressbar-basic.html').default
  },
  showvalue: {
    title: 'Progress bars with current value labels',
    type: ProgressbarShowvalueComponent,
    code: require('!!raw-loader!./demos/showvalue/progressbar-showvalue').default,
    markup: require('!!raw-loader!./demos/showvalue/progressbar-showvalue.html').default
  },
  striped: {
    title: 'Striped progress bars',
    type: ProgressbarStripedComponent,
    code: require('!!raw-loader!./demos/striped/progressbar-striped').default,
    markup: require('!!raw-loader!./demos/striped/progressbar-striped.html').default
  },
  labels: {
    title: 'Progress bars with custom labels',
    type: ProgressbarLabelsComponent,
    code: require('!!raw-loader!./demos/labels/progressbar-labels').default,
    markup: require('!!raw-loader!./demos/labels/progressbar-labels.html').default
  },
  height: {
    title: 'Progress bars with height',
    type: ProgressbarHeightComponent,
    code: require('!!raw-loader!./demos/height/progressbar-height').default,
    markup: require('!!raw-loader!./demos/height/progressbar-height.html').default
  },
  config: {
    title: 'Global configuration progress bars',
    type: ProgressbarConfigComponent,
    code: require('!!raw-loader!./demos/config/progressbar-config').default,
    markup: require('!!raw-loader!./demos/config/progressbar-config.html').default
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
    ProgressbarBasicModule,
    ProgressbarShowValueModule,
    ProgressbarStripedModule,
    ProgressbarConfigModule,
    ProgressbarLabelsModule,
    ProgressbarHeightModule,
  ]
})
export class ProgressbarDemoModule {
  constructor(demoList: DemoList) {
    demoList.register('progressbar', DEMOS);
  }
}
