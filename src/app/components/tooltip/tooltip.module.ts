import { NgModule } from '@angular/core';

import { ComponentWrapperComponent } from '../../demo-utility/component-wrapper/component-wrapper.component';
import { DemosSharedModule } from '../../demo-utility/demos-shared.module';
import { ApiPageComponent } from '../shared/api-page/api-page.component';
import { ComponentsSharedModule, DemoList } from '../shared/components.module';
import { ExamplesPageComponent } from '../shared/examples-page/examples.component';
import { TooltipAutocloseComponent } from './demos/autoclose/tooltip-auto-close';
import { TooltipAutocloseModule } from './demos/autoclose/tooltip-auto-close.module';
import { TooltipBasicComponent } from './demos/basic/tooltip-basic';
import { TooltipBasicModule } from './demos/basic/tooltip-basic.module';
import { TooltipConfigComponent } from './demos/config/tooltip-config';
import { TooltipConfigModule } from './demos/config/tooltip-config.module';
import { TooltipContainerComponent } from './demos/container/tooltip-container';
import { TooltipContainerModule } from './demos/container/tooltip-container.module';
import { TooltipCustomclassComponent } from './demos/customclass/tooltip-custom-class';
import { TooltipCustomClassModule } from './demos/customclass/tooltip-custom-class.module';
import { TooltipDelayComponent } from './demos/delay/tooltip-delay';
import { TooltipDelayModule } from './demos/delay/tooltip-delay.module';
import { TooltipTplcontentComponent } from './demos/tplcontent/tooltip-tpl-content';
import { TooltipTplContentModule } from './demos/tplcontent/tooltip-tpl-content.module';
import { TooltipTplwithcontextComponent } from './demos/tplwithcontext/tooltip-tpl-with-context';
import { TooltipTplWithContextModule } from './demos/tplwithcontext/tooltip-tpl-with-context.module';
import { TooltipTriggersComponent } from './demos/triggers/tooltip-triggers';
import { TooltipTriggersModule } from './demos/triggers/tooltip-triggers.module';

const DEMOS = {
  basic: {
    title: 'Quick and easy tooltips',
    type: TooltipBasicComponent,
    code: require('!!raw-loader!./demos/basic/tooltip-basic').default,
    markup: require('!!raw-loader!./demos/basic/tooltip-basic.html').default
  },
  tplcontent: {
    title: 'HTML and bindings in tooltips',
    type: TooltipTplcontentComponent,
    code: require('!!raw-loader!./demos/tplcontent/tooltip-tpl-content').default,
    markup: require('!!raw-loader!./demos/tplcontent/tooltip-tpl-content.html').default
  },
  triggers: {
    title: 'Custom and manual triggers',
    type: TooltipTriggersComponent,
    code: require('!!raw-loader!./demos/triggers/tooltip-triggers').default,
    markup: require('!!raw-loader!./demos/triggers/tooltip-triggers.html').default
  },
  autoClose: {
    title: 'Automatic closing with keyboard and mouse',
    type: TooltipAutocloseComponent,
    code: require('!!raw-loader!./demos/autoclose/tooltip-auto-close').default,
    markup: require('!!raw-loader!./demos/autoclose/tooltip-auto-close.html').default
  },
  tplwithcontext: {
    title: 'Context and manual triggers',
    type: TooltipTplwithcontextComponent,
    code: require('!!raw-loader!./demos/tplwithcontext/tooltip-tpl-with-context').default,
    markup: require('!!raw-loader!./demos/tplwithcontext/tooltip-tpl-with-context.html').default
  },
  delay: {
    title: 'Open and close delays',
    type: TooltipDelayComponent,
    code: require('!!raw-loader!./demos/delay/tooltip-delay').default,
    markup: require('!!raw-loader!./demos/delay/tooltip-delay.html').default
  },
  container: {
    title: 'Append tooltip in the body',
    type: TooltipContainerComponent,
    code: require('!!raw-loader!./demos/container/tooltip-container').default,
    markup: require('!!raw-loader!./demos/container/tooltip-container.html').default
  },
  customclass: {
    title: 'Tooltip with custom class',
    type: TooltipCustomclassComponent,
    code: require('!!raw-loader!./demos/customclass/tooltip-custom-class').default,
    markup: require('!!raw-loader!./demos/customclass/tooltip-custom-class.html').default,
    stylesheet: require('!!raw-loader!./demos/customclass/tooltip-custom-class.scss').default
  },
  config: {
    title: 'Global configuration of tooltips',
    type: TooltipConfigComponent,
    code: require('!!raw-loader!./demos/config/tooltip-config').default,
    markup: require('!!raw-loader!./demos/config/tooltip-config.html').default
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
    TooltipBasicModule,
    TooltipContainerModule,
    TooltipCustomClassModule,
    TooltipDelayModule,
    TooltipTplContentModule,
    TooltipTriggersModule,
    TooltipAutocloseModule,
    TooltipConfigModule,
    TooltipTplWithContextModule
  ]
})
export class TooltipDemoModule {
  constructor(demoList: DemoList) {
    demoList.register('tooltip', DEMOS);
  }
}
