import { NgModule } from '@angular/core';

import { ComponentWrapperComponent } from '../../demo-utility/component-wrapper/component-wrapper.component';
import { DemosSharedModule } from '../../demo-utility/demos-shared.module';
import { ApiPageComponent } from '../shared/api-page/api-page.component';
import { ComponentsSharedModule, DemoList } from '../shared/components.module';
import { ExamplesPageComponent } from '../shared/examples-page/examples.component';
import { TabsetBasicComponent } from './demos/basic/tabset-basic';
import { TabsetBasicModule } from './demos/basic/tabset-basic.module';
import { TabsetConfigComponent } from './demos/config/tabset-config';
import { TabsetConfigModule } from './demos/config/tabset-config.module';
import { TabsetJustifyComponent } from './demos/justify/tabset-justify';
import { TabsetJustifyModule } from './demos/justify/tabset-justify.module';
import { TabsetPillsComponent } from './demos/pills/tabset-pills';
import { TabsetPillsModule } from './demos/pills/tabset-pills.module';
import { TabsetPreventchangeComponent } from './demos/preventchange/tabset-prevent-change';
import { TabsetPreventChangeModule } from './demos/preventchange/tabset-prevent-change.module';
import { TabsetSelectbyidComponent } from './demos/selectbyid/tabset-selectbyid';
import { TabsetSelectbyidModule } from './demos/selectbyid/tabset-selectbyid.module';

const DEMOS = {
  basic: {
    title: 'Basic',
    type: TabsetBasicComponent,
    code: require('!!raw-loader!./demos/basic/tabset-basic').default,
    markup: require('!!raw-loader!./demos/basic/tabset-basic.html').default
  },
  pills: {
    title: 'Pills',
    type: TabsetPillsComponent,
    code: require('!!raw-loader!./demos/pills/tabset-pills').default,
    markup: require('!!raw-loader!./demos/pills/tabset-pills.html').default
  },
  selectbyid: {
    title: 'Select an active tab by id',
    type: TabsetSelectbyidComponent,
    code: require('!!raw-loader!./demos/selectbyid/tabset-selectbyid').default,
    markup: require('!!raw-loader!./demos/selectbyid/tabset-selectbyid.html').default
  },
  preventchange: {
    title: 'Prevent tab change',
    type: TabsetPreventchangeComponent,
    code: require('!!raw-loader!./demos/preventchange/tabset-prevent-change').default,
    markup: require('!!raw-loader!./demos/preventchange/tabset-prevent-change.html').default
  },
  justify: {
    title: 'Nav justification',
    type: TabsetJustifyComponent,
    code: require('!!raw-loader!./demos/justify/tabset-justify').default,
    markup: require('!!raw-loader!./demos/justify/tabset-justify.html').default
  },
  config: {
    title: 'Global configuration of tabs',
    type: TabsetConfigComponent,
    code: require('!!raw-loader!./demos/config/tabset-config').default,
    markup: require('!!raw-loader!./demos/config/tabset-config.html').default
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
    TabsetBasicModule,
    TabsetPillsModule,
    TabsetPreventChangeModule,
    TabsetSelectbyidModule,
    TabsetConfigModule,
    TabsetJustifyModule,
  ]
})
export class TabsetDemoModule {
  constructor(demoList: DemoList) {
    demoList.register('tabset', DEMOS);
  }
}
