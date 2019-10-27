import { NgModule } from '@angular/core';

import { ComponentWrapperComponent } from '../../demo-utility/component-wrapper/component-wrapper.component';
import { DemosSharedModule } from '../../demo-utility/demos-shared.module';
import { ApiPageComponent } from '../shared/api-page/api-page.component';
import { ComponentsSharedModule, DemoList } from '../shared/components.module';
import { ExamplesPageComponent } from '../shared/examples-page/examples.component';
import { PopoverAutocloseComponent } from './demos/autoclose/popover-auto-close';
import { PopoverAutocloseModule } from './demos/autoclose/popover-auto-close.module';
import { PopoverBasicComponent } from './demos/basic/popover-basic';
import { PopoverBasicModule } from './demos/basic/popover-basic.module';
import { PopoverConfigComponent } from './demos/config/popover-config';
import { PopoverConfigModule } from './demos/config/popover-config.module';
import { PopoverContainerComponent } from './demos/container/popover-container';
import { PopoverContainerModule } from './demos/container/popover-container.module';
import { PopoverCustomclassComponent } from './demos/customclass/popover-custom-class';
import { PopoverCustomClassModule } from './demos/customclass/popover-custom-class.module';
import { PopoverDelayComponent } from './demos/delay/popover-delay';
import { PopoverDelayModule } from './demos/delay/popover-delay.module';
import { PopoverTplcontentComponent } from './demos/tplcontent/popover-tpl-content';
import { PopoverTplContentModule } from './demos/tplcontent/popover-tpl-content.module';
import { PopoverTplwithcontextComponent } from './demos/tplwithcontext/popover-tpl-with-context';
import { PopoverTplWithContextModule } from './demos/tplwithcontext/popover-tpl-with-context.module';
import { PopoverTriggersComponent } from './demos/triggers/popover-triggers';
import { PopoverTriggersModule } from './demos/triggers/popover-triggers.module';
import { PopoverVisibilityComponent } from './demos/visibility/popover-visibility';
import { PopoverVisibilityModule } from './demos/visibility/popover-visibility.module';

const DEMOS = {
  basic: {
    title: 'Quick and easy popovers',
    type: PopoverBasicComponent,
    code: require('!!raw-loader!./demos/basic/popover-basic').default,
    markup: require('!!raw-loader!./demos/basic/popover-basic.html').default
  },
  tplcontent: {
    title: 'HTML and bindings in popovers',
    type: PopoverTplcontentComponent,
    code: require('!!raw-loader!./demos/tplcontent/popover-tpl-content').default,
    markup: require('!!raw-loader!./demos/tplcontent/popover-tpl-content.html').default
  },
  triggers: {
    title: 'Custom and manual triggers',
    type: PopoverTriggersComponent,
    code: require('!!raw-loader!./demos/triggers/popover-triggers').default,
    markup: require('!!raw-loader!./demos/triggers/popover-triggers.html').default
  },
  autoClose: {
    title: 'Automatic closing with keyboard and mouse',
    type: PopoverAutocloseComponent,
    code: require('!!raw-loader!./demos/autoclose/popover-auto-close').default,
    markup: require('!!raw-loader!./demos/autoclose/popover-auto-close.html').default
  },
  tplwithcontext: {
    title: 'Context and manual triggers',
    type: PopoverTplwithcontextComponent,
    code: require('!!raw-loader!./demos/tplwithcontext/popover-tpl-with-context').default,
    markup: require('!!raw-loader!./demos/tplwithcontext/popover-tpl-with-context.html').default
  },
  delay: {
    title: 'Open and close delays',
    type: PopoverDelayComponent,
    code: require('!!raw-loader!./demos/delay/popover-delay').default,
    markup: require('!!raw-loader!./demos/delay/popover-delay.html').default
  },
  visibility: {
    title: 'Popover visibility events',
    type: PopoverVisibilityComponent,
    code: require('!!raw-loader!./demos/visibility/popover-visibility').default,
    markup: require('!!raw-loader!./demos/visibility/popover-visibility.html').default
  },
  container: {
    title: 'Append popover in the body',
    type: PopoverContainerComponent,
    code: require('!!raw-loader!./demos/container/popover-container').default,
    markup: require('!!raw-loader!./demos/container/popover-container.html').default
  },
  customclass: {
    title: 'Popover with custom class',
    type: PopoverCustomclassComponent,
    code: require('!!raw-loader!./demos/customclass/popover-custom-class').default,
    markup: require('!!raw-loader!./demos/customclass/popover-custom-class.html').default,
    stylesheet: require('!!raw-loader!./demos/customclass/popover-custom-class.scss').default,
  },
  config: {
    title: 'Global configuration of popovers',
    type: PopoverConfigComponent,
    code: require('!!raw-loader!./demos/config/popover-config').default,
    markup: require('!!raw-loader!./demos/config/popover-config.html').default
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
    PopoverBasicModule,
    PopoverTplContentModule,
    PopoverTplWithContextModule,
    PopoverTriggersModule,
    PopoverAutocloseModule,
    PopoverVisibilityModule,
    PopoverContainerModule,
    PopoverCustomClassModule,
    PopoverDelayModule,
    PopoverConfigModule
  ]
})
export class PopoverDemoModule {
  constructor(demoList: DemoList) {
    demoList.register('popover', DEMOS);
  }
}
